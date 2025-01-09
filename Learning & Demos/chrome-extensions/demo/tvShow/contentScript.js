console.log('LOADED CONTENT');

// confirm('Hello from content script');

text_links = [];

const aTags = document.getElementsByTagName('a');
for (const tag of aTags) {
  text_links.push(tag);
}

chrome.runtime.sendMessage(null, text_links, (response) => {
  console.log('I am from the content script' + response);
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('content script', message, sender);
});
