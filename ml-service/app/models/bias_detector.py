from transformers import pipeline
import re
from typing import Tuple

class BiasDetector:
    """Detect political bias in text"""
    
    def __init__(self):
        self.classifier = None
        self._load_model()
        
        
        self.left_indicators = [
            'progressive', 'liberal', 'equality', 'social justice',
            'climate change', 'healthcare for all', 'gun control',
            'diversity', 'inclusion', 'systemic racism', 'marginalized',
            'workers rights', 'wealth inequality', 'corporate greed'
        ]
        
        self.right_indicators = [
            'conservative', 'traditional', 'freedom', 'liberty',
            'free market', 'small government', 'second amendment',
            'border security', 'law and order', 'family values',
            'patriot', 'constitutional', 'deregulation', 'tax cuts'
        ]
    
    def _load_model(self):
        """Load bias detection model"""
        try:
           
            print("[BiasDetector] Loading zero-shot classifier...")
            
            self.classifier = pipeline(
                "zero-shot-classification",
                model="facebook/bart-large-mnli",
                device=-1  
            )
            
            print("[BiasDetector] Model loaded successfully")
            
        except Exception as e:
            print(f"[BiasDetector] Error loading model: {e}")
            print("[BiasDetector] Using fallback heuristic method")
            self.classifier = None
    
    def detect_bias(self, text: str) -> Tuple[str, float]:
        """
        Detect political bias in text.
        
        Returns tuple of (bias_label, confidence).
        bias_label: 'left', 'center', 'right', or 'unknown'
        confidence: 0.0 to 1.0
        """
        if not text or len(text.strip()) < 20:
            return ('unknown', 0.0)
        
        try:
            if self.classifier:
                return self._ml_detect(text)
            else:
                return self._heuristic_detect(text)
                
        except Exception as e:
            print(f"[BiasDetector] Error: {e}")
            return ('unknown', 0.0)
    
    def _ml_detect(self, text: str) -> Tuple[str, float]:
        """Use ML model for bias detection"""
      
        text = text[:1000]
        
    
        labels = [
            "left-wing political bias",
            "right-wing political bias", 
            "neutral and balanced reporting"
        ]
        
        result = self.classifier(text, labels)
        
      
        top_label = result['labels'][0]
        top_score = result['scores'][0]
        
        if 'left' in top_label.lower():
            return ('left', top_score)
        elif 'right' in top_label.lower():
            return ('right', top_score)
        else:
            return ('center', top_score)
    
    def _heuristic_detect(self, text: str) -> Tuple[str, float]:
        """Fallback heuristic-based bias detection"""
        text_lower = text.lower()
        
       
        left_count = sum(1 for word in self.left_indicators if word in text_lower)
        right_count = sum(1 for word in self.right_indicators if word in text_lower)
        
        total = left_count + right_count
        
        if total == 0:
            return ('unknown', 0.0)
        
      
        if left_count > right_count * 1.5:
            confidence = min(left_count / 10, 1.0)
            return ('left', confidence)
        elif right_count > left_count * 1.5:
            confidence = min(right_count / 10, 1.0)
            return ('right', confidence)
        else:
            
            confidence = 0.5
            return ('center', confidence)