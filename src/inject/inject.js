// var response;

// if (window == top) {
//   chrome.extension.onMessage.addListener(function(req, sender, sendResponse) {
// 	findVideoURL(sendResponse);
//   });
// }

// Search page for a video element and extract url
// Return null if none is found.
// var findVideoURL = function(sendResponse) {
//   	response = sendResponse;


// }

var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		var $htmlVideo = $("video");
		if ($htmlVideo.length > 0) {
			console.log("video found");

		    var videoURL = $htmlVideo.attr("src");
			if (videoURL === undefined) {
				$htmlVideo.on("play", function sendVideoURLOnPlay(e) {
					console.log("played");
					var videoURL = $(e.currentTarget).attr("src");
					if (videoURL !== undefined) {
						sendVideoURL(videoURL);
					}
				});
			}
			else {
				sendVideoURL(videoURL);
			}
		}

		// ----------------------------------------------------------

	}
}, 10);

var sendVideoURL = function sendVideoURL(videoURL) {
	chrome.extension.sendMessage({videoURL: videoURL});
}