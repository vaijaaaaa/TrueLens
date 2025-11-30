from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import asyncio

from .config import settings
from .schemas.responses import (
    AnalyzeRequest, 
    AnalyzeResponse, 
    ClaimAnalysis,
    FactCheckResult
)
from .models import (
    ClaimExtractor,
    FakeNewsDetector,
    BiasDetector,
    FactChecker
)


claim_extractor = None
fake_news_detector = None
bias_detector = None
fact_checker = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Load ML models on startup"""
    global claim_extractor, fake_news_detector, bias_detector, fact_checker
    
    print("[TrueLens ML] Loading models...")
    
    claim_extractor = ClaimExtractor()
    fake_news_detector = FakeNewsDetector()
    bias_detector = BiasDetector()
    fact_checker = FactChecker()
    
    print("[TrueLens ML] All models loaded!")
    
    yield
    
   
    print("[TrueLens ML] Shutting down...")


app = FastAPI(
    title="TrueLens ML Service",
    description="AI/ML backend for fake news and bias detection",
    version="2.0.0",
    lifespan=lifespan
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health_check():
    return {
        "status": "ok",
        "service": "TrueLens ML Service",
        "version": "2.0.0",
        "models_loaded": {
            "claim_extractor": claim_extractor is not None,
            "fake_news_detector": fake_news_detector is not None,
            "bias_detector": bias_detector is not None,
            "fact_checker": fact_checker is not None
        }
    }


@app.post("/ml", response_model=AnalyzeResponse)
async def analyze_text(request: AnalyzeRequest):
    """
    Analyze text for fake news and political bias.
    
    Pipeline:
    1. Extract claims from text
    2. Detect fake news probability for each claim
    3. Check claims against fact-check databases
    4. Detect overall political bias
    5. Return comprehensive analysis
    """
    
  
    if not request.text or len(request.text.strip()) == 0:
        raise HTTPException(status_code=400, detail="Text is required")
    
    text = request.text[:settings.MAX_TEXT_LENGTH]
    
    print(f"[TrueLens ML] Analyzing text ({len(text)} chars)...")
    
    
    print("[TrueLens ML] Step 1: Extracting claims...")
    extracted_claims = claim_extractor.extract_claims(text, max_claims=settings.MAX_CLAIMS)
    

    print("[TrueLens ML] Step 2: Analyzing claims for fake news...")
    claim_analyses = []
    total_fake_prob = 0.0
    
    for claim_text, claim_confidence in extracted_claims:
      
        fake_prob = fake_news_detector.predict(claim_text)
        total_fake_prob += fake_prob
        
   
        fact_result = None
        try:
            fact_check_data = await fact_checker.check_claim(claim_text)
            if fact_check_data:
                fact_result = FactCheckResult(
                    claim=fact_check_data["claim"],
                    rating=fact_check_data["rating"],
                    source=fact_check_data["source"],
                    url=fact_check_data["url"]
                )
        except Exception as e:
            print(f"[TrueLens ML] Fact check error: {e}")
        
        claim_analyses.append(ClaimAnalysis(
            claim=claim_text,
            fake_probability=round(fake_prob, 3),
            fact_check=fact_result
        ))
    
 
    avg_fake_prob = total_fake_prob / len(extracted_claims) if extracted_claims else 0.5
    

    print("[TrueLens ML] Step 3: Detecting political bias...")
    bias_label, bias_confidence = bias_detector.detect_bias(text)
    
  
    print("[TrueLens ML] Analysis complete!")
    
    response = AnalyzeResponse(
        fake_probability=round(avg_fake_prob, 3),
        bias=bias_label,
        bias_confidence=round(bias_confidence, 3),
        claims=claim_analyses,
        claim_count=len(claim_analyses),
        text_length=len(text),
        message=f"Analyzed {len(claim_analyses)} claims from {len(text)} characters"
    )
    
    print(f"[TrueLens ML] Result: fake_prob={response.fake_probability}, bias={response.bias}")
    
    return response


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG
    )