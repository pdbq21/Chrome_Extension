

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  //var bkg = chrome.extension.getBackgroundPage();

  chrome.tabs.executeScript(tab.id, {file: "script.js"}, function() {
    // Note: we also sent a message above, upon loading the event page,
    // but the content script will not be loaded at that point, so we send
    // another here.
    chrome.storage.local.get('notes', function (result) {
      result.notes.forEach((link) => {
        if (!!link){
          chrome.tabs.create({ url: link });
        }
      })

    });
  });

});
