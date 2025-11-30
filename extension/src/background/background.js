
console.log('[TrueLens] Background service worker started');

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('[TrueLens] Extension installed');
  } else if (details.reason === 'update') {
    console.log('[TrueLens] Extension updated');
  }
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTabId') {

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        sendResponse({ tabId: tabs[0].id });
      } else {
        sendResponse({ tabId: null });
      }
    });
    return true; 
  }
});