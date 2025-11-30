import httpx
import asyncio
from typing import Optional, Dict, List
from ..config import settings

class FactChecker:
    """Verify claims using Google Fact Check API"""
    
    def __init__(self):
        self.api_key = settings.GOOGLE_FACT_CHECK_API_KEY
        self.base_url = "https://factchecktools.googleapis.com/v1alpha1/claims:search"
        
        if self.api_key and self.api_key != "your_api_key_here":
            print("[FactChecker] Google Fact Check API configured")
        else:
            print("[FactChecker] No API key - fact checking disabled")
    
    async def check_claim(self, claim: str) -> Optional[Dict]:
        """
        Check a single claim against Google Fact Check API.
        
        Returns dict with:
        - claim: original claim
        - rating: fact-check rating (e.g., "False", "True", "Mostly True")
        - source: fact-checker name
        - url: link to fact-check article
        """
        if not self.api_key or self.api_key == "your_api_key_here":
            return None
        
        try:
            async with httpx.AsyncClient() as client:
                params = {
                    "key": self.api_key,
                    "query": claim[:200],  
                    "languageCode": "en"
                }
                
                response = await client.get(self.base_url, params=params, timeout=10.0)
                
                if response.status_code != 200:
                    print(f"[FactChecker] API error: {response.status_code}")
                    return None
                
                data = response.json()
                
              
                if "claims" in data and len(data["claims"]) > 0:
                    first_claim = data["claims"][0]
                    
                    
                    if "claimReview" in first_claim and len(first_claim["claimReview"]) > 0:
                        review = first_claim["claimReview"][0]
                        
                        return {
                            "claim": claim,
                            "rating": review.get("textualRating", "Unknown"),
                            "source": review.get("publisher", {}).get("name", "Unknown"),
                            "url": review.get("url", "")
                        }
                
                return None
                
        except Exception as e:
            print(f"[FactChecker] Error checking claim: {e}")
            return None
    
    async def check_claims_batch(self, claims: List[str]) -> List[Optional[Dict]]:
        """Check multiple claims concurrently"""
        tasks = [self.check_claim(claim) for claim in claims]
        results = await asyncio.gather(*tasks)
        return results
    
    def check_claim_sync(self, claim: str) -> Optional[Dict]:
        """Synchronous wrapper for check_claim"""
        try:
            return asyncio.run(self.check_claim(claim))
        except RuntimeError:
          
            loop = asyncio.get_event_loop()
            return loop.run_until_complete(self.check_claim(claim))