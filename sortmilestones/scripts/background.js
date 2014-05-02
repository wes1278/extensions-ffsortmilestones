'use strict';
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {code: 'sortItAll();'});
});
