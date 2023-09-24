// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the tab URL is a spreadsheet
    if (tab.url.endsWith('.xlsx') || tab.url.endsWith('.xls')) {
      
      
      chrome.tabs.executeScript(tabId, {
        file: 'spreadsheet.js'
      });
    }
  });
  