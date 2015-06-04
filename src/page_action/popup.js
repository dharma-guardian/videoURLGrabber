var showVideoURL = function showVideoURL() {
  var videoURL = chrome.extension.getBackgroundPage().getVideoURL();
  document.getElementsByTagName("p")[0].innerHTML = videoURL;
};

window.onload = showVideoURL;