import os
from dotenv import load_dotenv


load_dotenv()

class Settings:
    """Application settings"""
    

    GOOGLE_FACT_CHECK_API_KEY: str = os.getenv("GOOGLE_FACT_CHECK_API_KEY", "")
    
    
    FAKE_NEWS_MODEL: str = "distilbert-base-uncased"
    BIAS_MODEL: str = "distilbert-base-uncased"
    
  
    MAX_TEXT_LENGTH: int = 5000
    MAX_CLAIMS: int = 10
    

    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"

settings = Settings()