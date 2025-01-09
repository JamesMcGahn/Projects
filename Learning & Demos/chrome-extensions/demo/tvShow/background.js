chrome.runtime.onInstalled.addListener((details) => {
  chrome.storage.local.set({
    shows: [],
  });
  chrome.contextMenus.create({
    title: 'Test',
    id: 'contextMenu1',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.create({
    title: 'Test 2',
    id: 'contextMenu2',
    contexts: ['page', 'selection'],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    // chrome.tabs.create({
    //   url: `https://www.imdb.com/find/?q=${event.selectionText}&ref_=nv_sr_sm`,
    // });
    if (event.menuItemId === 'contextMenu1') {
      fetch(`http://api.tvmaze.com/search/shows?q=${event.selectionText}`)
        .then((res) => res.json())
        .then((data) => {
          chrome.storage.local.set({
            shows: data,
          });

          console.log(data);
        });
    } else {
      chrome.tts.speak(event.selectionText, {
        rate: 1,
        lang: 'zh-CN',
      });
    }
  });
});

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   console.log('logging message', msg, sender, sendResponse);
//   sendResponse('sendresponse function in background');
//   chrome.tabs.sendMessage(sender.tab.id, 'Got your message - background');
// });
