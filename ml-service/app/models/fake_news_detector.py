
from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification
import torch
from typing import List, Tuple

class FakeNewsDetector:
    """Detect fake news using transformer models"""
    
    def __init__(self):
        self.model = None
        self.tokenizer = None
        self.classifier = None
        self._load_model()
    
    def _load_model(self):
        """Load the fake news detection model"""
        try:
            
            model_name = "hamzab/roberta-fake-news-classification"
            
            print(f"[FakeNewsDetector] Loading model: {model_name}")
            
            self.classifier = pipeline(
                "text-classification",
                model=model_name,
                tokenizer=model_name,
                device=-1  
            )
            
            print("[FakeNewsDetector] Model loaded successfully")
            
        except Exception as e:
            print(f"[FakeNewsDetector] Error loading model: {e}")
            print("[FakeNewsDetector] Using fallback heuristic method")
            self.classifier = None
    
    def predict(self, text: str) -> float:
        """
        Predict fake news probability for a single text.
        
        Returns probability between 0 (real) and 1 (fake).
        """
        if not text or len(text.strip()) < 10:
            return 0.5
        
        try:
            if self.classifier:
             
                result = self.classifier(text[:512])[0] 
                
                
                label = result['label'].upper()
                score = result['score']
                
                if label == 'FAKE':
                    return score
                else:
                    return 1 - score
            else:
                
                return self._heuristic_detect(text)
                
        except Exception as e:
            print(f"[FakeNewsDetector] Prediction error: {e}")
            return 0.5
    
    def predict_batch(self, texts: List[str]) -> List[float]:
        """Predict fake news probability for multiple texts"""
        return [self.predict(text) for text in texts]
    
    def _heuristic_detect(self, text: str) -> float:
        """Fallback heuristic-based fake news detection"""
        score = 0.5
        text_lower = text.lower()
        
       
        sensational_words = [
            'shocking', 'breaking', 'urgent', 'exclusive', 'unbelievable',
            'you won\'t believe', 'mind-blowing', 'exposed', 'secret',
            'they don\'t want you to know', 'mainstream media'
        ]
        
        for word in sensational_words:
            if word in text_lower:
                score += 0.05
        
      
        if text.count('!') > 3:
            score += 0.1
        if text.count('?') > 5:
            score += 0.05
            
        
        words = text.split()
        caps_ratio = sum(1 for w in words if w.isupper() and len(w) > 2) / max(len(words), 1)
        if caps_ratio > 0.1:
            score += 0.1
        
        return min(score, 1.0)