const API_BASE_URL = 'http://localhost:5000';

/**
 * Send text to backend for analysis
 * @param {string} text - The webpage text to analyze
 * @returns {Promise<Object>} - Analysis result
 */
export async function analyzeText(text) {
  try {
    const response = await fetch(`${API_BASE_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('[TrueLens] API Error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to connect to server' 
    };
  }
}

/**
 * Check if backend is available
 * @returns {Promise<boolean>}
 */
export async function checkBackendHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/`);
    return response.ok;
  } catch {
    return false;
  }
}