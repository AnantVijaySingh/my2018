var playlist = ["assets/NikeFindYourGreatness.mp4",""]
var pos = 0;
var videoPaused = false;
var videoPlaying = false;

window.onload = function () {
	var controlBtns = document.querySelectorAll(".videoBtns button");
	var video =  document.getElementById("video");

	for(var i = 0, length1 = controlBtns.length; i < length1; i++){
		controlBtns[i].addEventListener("click", handleControlBtn, false);
	}
	// video.addEventListener("ended",playAgain,false);
}

function handleControlBtn (e) {
	var id = e.target.getAttribute("id");

	if (id=="playBtn") {
		pushUnpushBtn("playBtn","pauseBtn");
		playVideo(video);
	} else if (id=="pauseBtn") {
		pushUnpushBtn("pauseBtn","playBtn");
		video.pause();
		if (videoPlaying) {
		videoPaused = true;
		}
	} else {
		// statement
	}
}

function pushUnpushBtn(idToPush,idToUnpush) {
	var push = document.getElementById(idToPush);
	var unpush = document.getElementById(idToUnpush);
	push.setAttribute("class","selected");
	unpush.setAttribute("class","unselected");
}

function playVideo (video) {
	if (videoPaused) {
		video.play();
	} else {
		video.src = playlist[pos];
		video.load();
		video.play();
		videoPlaying = true;
	}
}