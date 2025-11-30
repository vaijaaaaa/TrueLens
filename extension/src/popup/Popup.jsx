import { useState } from 'react';
import { analyzeText } from '../utils/api';
import './Popup.css';

function Popup() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const extractTextFromPage = async (tabId) => {
    const results = await chrome.scripting.executeScript({
      target: { tabId },
      func: () => {
        let text = document.body.innerText;
        text = text.replace(/\s+/g, ' ').replace(/\n+/g, '\n').trim();
        const MAX_LENGTH = 10000;
        if (text.length > MAX_LENGTH) {
          text = text.substring(0, MAX_LENGTH) + '...';
        }
        return text;
      }
    });
    return results[0]?.result || '';
  };

  const handleAnalyze = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const [tab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true 
      });

      if (!tab?.id) {
        throw new Error('No active tab found');
      }

      if (tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://')) {
        throw new Error('Cannot analyze browser pages');
      }

      const text = await extractTextFromPage(tab.id);

      if (!text || text.length < 50) {
        throw new Error('Not enough text content on this page');
      }

      const analysisResult = await analyzeText(text);

      if (analysisResult.success) {
        setResult(analysisResult.data);
      } else {
        throw new Error(analysisResult.error);
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getRiskLevel = (probability) => {
    if (probability < 0.3) return 'low';
    if (probability < 0.7) return 'medium';
    return 'high';
  };

  const getRiskLabel = (probability) => {
    if (probability < 0.3) return 'Likely Real';
    if (probability < 0.7) return 'Uncertain';
    return 'Likely Fake';
  };

  return (
    <div className="popup-container">
      <header className="popup-header">
        <h1 className="popup-title">TrueLens</h1>
        <p className="popup-subtitle">Analyze any page for misinformation and bias</p>
      </header>

      <button 
        className="analyze-btn" 
        onClick={handleAnalyze}
        disabled={loading}
      >
        {loading ? (
          <span className="loading">
            <span className="spinner"></span>
            Analyzing...
          </span>
        ) : (
          'Analyze This Page'
        )}
      </button>

      {error && (
        <div className="error-container">
          {error}
        </div>
      )}

      {result && (
        <div className="results-container">
          <h2 className="results-title">Analysis Results</h2>
          
          <div className="score-section">
            <div className="score-card">
              <div className="score-label">Credibility</div>
              <div className={`score-value ${getRiskLevel(result.fake_probability)}`}>
                {(100 - result.fake_probability * 100).toFixed(0)}%
              </div>
              <span className={`score-tag ${getRiskLevel(result.fake_probability)}`}>
                {getRiskLabel(result.fake_probability)}
              </span>
            </div>
            
            <div className="score-card">
              <div className="score-label">Bias</div>
              <div className="bias-value">{result.bias}</div>
              <div className="bias-confidence">
                {(result.bias_confidence * 100).toFixed(0)}% confidence
              </div>
            </div>
          </div>

          {result.claims && result.claims.length > 0 && (
            <div className="claims-section">
              <h3 className="claims-title">Claims Found ({result.claim_count})</h3>
              
              {result.claims.map((claim, index) => (
                <div key={index} className="claim-item">
                  <p className="claim-text">{claim.claim}</p>
                  <div className="claim-meta">
                    <span className={`claim-probability ${getRiskLevel(claim.fake_probability)}`}>
                      {(100 - claim.fake_probability * 100).toFixed(0)}% credible
                    </span>
                    
                    {claim.fact_check && (
                      <div className="fact-check">
                        <span className="fact-check-badge">
                          {claim.fact_check.rating}
                        </span>
                        {claim.fact_check.url && (
                          <a 
                            href={claim.fact_check.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="fact-check-link"
                          >
                            {claim.fact_check.source}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="summary-bar">
            Analyzed {result.text_length.toLocaleString()} characters
          </div>
        </div>
      )}

      <footer className="popup-footer">
        TrueLens v2.0
      </footer>
    </div>
  );
}

export default Popup;