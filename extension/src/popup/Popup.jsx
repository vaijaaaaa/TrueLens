import { useState } from 'react';
import { analyzeText } from '../utils/api';
import './Popup.css';

function Popup() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

 
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

      
      const response = await chrome.tabs.sendMessage(tab.id, { 
        action: 'extractText' 
      });

      if (!response?.text) {
        throw new Error('Could not extract text from page');
      }

      console.log(`[TrueLens] Extracted ${response.text.length} chars`);

      
      const analysisResult = await analyzeText(response.text);

      if (analysisResult.success) {
        setResult(analysisResult.data);
      } else {
        throw new Error(analysisResult.error);
      }
    } catch (err) {
      console.error('[TrueLens] Error:', err);
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getProbabilityStatus = (probability) => {
    if (probability < 0.3) return 'status-low';
    if (probability < 0.7) return 'status-medium';
    return 'status-high';
  };

  
  const getProbabilityLabel = (probability) => {
    if (probability < 0.3) return 'Low Risk';
    if (probability < 0.7) return 'Medium Risk';
    return 'High Risk';
  };

  return (
    <div className="popup-container">
     
      <header className="popup-header">
        <h1 className="popup-title"> TrueLens</h1>
        <p className="popup-subtitle">Fake News & Bias Detection</p>
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
          ' Analyze This Page'
        )}
      </button>

     
      {error && (
        <div className="error-container">
          <strong>Error:</strong> {error}
        </div>
      )}


      {result && (
        <div className="results-container">
          <h2 className="text-lg font-semibold mb-3">Analysis Results</h2>
          
       
          <div className="result-item">
            <span className="result-label">Fake News Probability</span>
            <span className={`status-badge ${getProbabilityStatus(result.fake_probability)}`}>
              {(result.fake_probability * 100).toFixed(0)}% - {getProbabilityLabel(result.fake_probability)}
            </span>
          </div>

       
          <div className="result-item">
            <span className="result-label">Political Bias</span>
            <span className="result-value capitalize">{result.bias}</span>
          </div>

          {result.message && (
            <div className="message-container">
              <strong>ℹ️ Note:</strong> {result.message}
            </div>
          )}
        </div>
      )}

    
      <footer className="mt-4 text-center text-xs text-gray-500">
        TrueLens v1.0.0 • Phase 1
      </footer>
    </div>
  );
}

export default Popup;