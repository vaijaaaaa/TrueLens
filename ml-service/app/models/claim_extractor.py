import spacy
from typing import List, Tuple
import re

class ClaimExtractor:
    """Extract factual claims from text using NLP"""
    
    def __init__(self):
      
        try:
            self.nlp = spacy.load("en_core_web_sm")
            print("[ClaimExtractor] Loaded spaCy model")
        except OSError:
            print("[ClaimExtractor] Downloading spaCy model...")
            import subprocess
            subprocess.run(["python", "-m", "spacy", "download", "en_core_web_sm"])
            self.nlp = spacy.load("en_core_web_sm")
        
     
        self.claim_patterns = [
            r"(?:says?|said|claims?|claimed|stated?|announces?|announced|reports?|reported)\s+that",
            r"according to",
            r"research shows",
            r"studies? (?:show|suggest|indicate|found)",
            r"experts? (?:say|believe|warn)",
            r"it is (?:true|false|clear|evident) that",
            r"the fact (?:is|remains) that",
        ]
        
    def extract_claims(self, text: str, max_claims: int = 10) -> List[Tuple[str, float]]:
        """
        Extract factual claims from text.
        
        Returns list of (claim_text, confidence) tuples.
        """
        claims = []
        
      
        doc = self.nlp(text[:50000])  
        
    
        for sent in doc.sents:
            sentence = sent.text.strip()
            
       
            if len(sentence) < 20 or len(sentence) > 500:
                continue
            
         
            score = self._calculate_claim_score(sent, sentence)
            
            if score > 0.3:  
                claims.append((sentence, score))
        
    
        claims.sort(key=lambda x: x[1], reverse=True)
        return claims[:max_claims]
    
    def _calculate_claim_score(self, sent, sentence: str) -> float:
        """Calculate how likely a sentence is a factual claim"""
        score = 0.0
    
        sentence_lower = sentence.lower()
        for pattern in self.claim_patterns:
            if re.search(pattern, sentence_lower):
                score += 0.3
                break
        
       
        entities = [ent for ent in sent.ents]
        if len(entities) >= 1:
            score += 0.2
        if len(entities) >= 2:
            score += 0.1
            
     
        has_numbers = bool(re.search(r'\d+%?', sentence))
        if has_numbers:
            score += 0.2
        
        
        has_subject = any(token.dep_ in ["nsubj", "nsubjpass"] for token in sent)
        has_verb = any(token.pos_ == "VERB" for token in sent)
        if has_subject and has_verb:
            score += 0.1
        
      
        if sentence.endswith("?"):
            score -= 0.3
   
        if re.match(r"^I\s", sentence):
            score -= 0.2
            
        return min(max(score, 0.0), 1.0)