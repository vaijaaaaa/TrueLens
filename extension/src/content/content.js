chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'extractText') {
   
    const text = extractPageText();
    sendResponse({ text });
  }
  return true; 
});

/**
 * Extract readable text from the webpage
 * @returns {string} - Cleaned page text
 */
function extractPageText() {

  let text = document.body.innerText;


  text = text
    .replace(/\s+/g, ' ')           
    .replace(/\n+/g, '\n')          
    .trim();                         

  
  const MAX_LENGTH = 10000;
  if (text.length > MAX_LENGTH) {
    text = text.substring(0, MAX_LENGTH) + '...';
  }

  console.log(`[TrueLens] Extracted ${text.length} characters`);
  return text;
}


console.log('[TrueLens] Content script loaded');