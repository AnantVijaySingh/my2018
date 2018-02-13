var playlist = ["assets/NikeFindYourGreatness.mp4",""]
var pos = 0;

window.onload = function () {
	console.log("video js");
	var controlBtns = document.querySelectorAll("button.videoButton");
	console.log(controlBtns);
	for(var i = 0, length1 = controlBtns.length; i < length1; i++){
		console.log(controlBtns[i]);
		controlBtns[i].addEventListener("click", handleControlBtn, false);
	}
}

function handleControlBtn (e) {
	var id = e.target.getAttribute("id");
	console.log(id);
	var video =  document.getElementById("video");

	if (id=="playBtn") {
		pushUnpushBtn("playBtn","pauseBtn");
		console.log('step 2');
		playVideo(video);
	} else if (id=="pauseBtn") {
		pushUnpushBtn("pauseBtn","playBtn");
		video.pause();
		console.log("video paused" + video.paused);
	} else {
		// statement
	}
}

function pushUnpushBtn(idToPush,idToUnpush) {

}

function playVideo (video) {
	if (video.src in playlist === true) {
		console.log(video.src in playlist);
		video.play();
	} else {
		console.log("ELSE"+ video.src in playlist);
		video.src = playlist[pos];
		video.load();
		video.play();
	}
}