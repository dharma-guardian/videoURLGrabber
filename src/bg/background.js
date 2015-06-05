var videos = {};
var selectedId;

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedId = tabId;
});

chrome.extension.onMessage.addListener(function(request, sender) {
	var tabId = sender.tab.id;
  	videos[tabId] = request.videoURL;
  	chrome.pageAction.show(tabId);
  	chrome.pageAction.setTitle({tabId: tabId, title: request.videoURL});
});

chrome.pageAction.onClicked.addListener(function onPageAction(e){
	if (videos[selectedId] !== undefined) {
		chrome.tabs.create({url: videos[selectedId]});
	}
});