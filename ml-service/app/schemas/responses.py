from pydantic import BaseModel
from typing import List, Optional

class Claim(BaseModel):
    """A single extracted claim"""
    text: str
    confidence: float
    
class FactCheckResult(BaseModel):
    """Result from fact-checking a claim"""
    claim: str
    rating: Optional[str] = None
    source: Optional[str] = None
    url: Optional[str] = None

class ClaimAnalysis(BaseModel):
    """Analysis of a single claim"""
    claim: str
    fake_probability: float
    fact_check: Optional[FactCheckResult] = None

class AnalyzeRequest(BaseModel):
    """Request to analyze text"""
    text: str

class AnalyzeResponse(BaseModel):
    """Complete analysis response"""
   
    fake_probability: float
    bias: str
    bias_confidence: float
    

    claims: List[ClaimAnalysis]
    claim_count: int
    

    text_length: int
    message: str