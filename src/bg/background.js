var videos = {};
var selectedId;

var getVideoURL = function getVideoURL() {
	if (videos[selectedId] !== undefined) {
		return videos[selectedId];
	}
	else {
		return "No Video URL found";
	}
};

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedId = tabId;
});

chrome.extension.onMessage.addListener(function(request, sender) {
	var tabId = sender.tab.id;
  	videos[tabId] = request.videoURL;
  	chrome.pageAction.show(tabId);
  	chrome.pageAction.setTitle({tabId: tabId, title: request.videoURL});
});