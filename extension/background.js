/**
 * Created by ruslan on 24.04.17.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    });
});