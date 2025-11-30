from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title = "TruLens ML Service",
    description = "AI/ML backend for fake news and bias detection",
    version = "1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class AnalyzeRequest(BaseModel):
    text: str

class AnalyzeResponse(BaseModel):
    fake_probability: float
    bias: str
    message: str

@app.get("/")
def health_check():
    return {
        "status": "ok",
        "service": "TrueLens ML Service",
        "message": "ML service is running"
    }


@app.post("/ml", response_model=AnalyzeResponse)
def analyze_text(request: AnalyzeRequest):
    """
    Analyze text for fake news and political bias.
    Phase 1: Returns dummy response.
    Phase 2+: Will use real ML models.
    """
    

    if not request.text or len(request.text.strip()) == 0:
        raise HTTPException(status_code=400, detail="Text is required")
    
    text_preview = request.text[:100] + "..." if len(request.text) > 100 else request.text
    print(f"[TrueLens ML] Received: {text_preview}")
    print(f"[TrueLens ML] Text length: {len(request.text)} chars")
    
  
    response = AnalyzeResponse(
        fake_probability=0.5,
        bias="unknown",
        message="Pipeline test successful - ML models not yet integrated"
    )
    
    print(f"[TrueLens ML] Response: {response}")
    return response



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)