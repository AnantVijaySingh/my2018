var playlist = ["assets/NikeFindYourGreatness.mp4",""]
var pos = 0;
var videoPaused = false;
var videoPlaying = false;
var effectFunction = null;

window.onload = function () {
	var controlBtns = document.querySelectorAll(".videoBtns button");
	var video =  document.getElementById("video");

	for(var i = 0, length1 = controlBtns.length; i < length1; i++){
		controlBtns[i].addEventListener("click", handleControlBtn, false);
	}

	video.addEventListener("play", processFrame, false);
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
	} else if (id=="normal") {
		effectFunction = null;
	} else if (id=="bw") {
		effectFunction = noir;
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

function processFrame() {
	var video = document.getElementById("video");

	if (video.paused || video.ended) {
		return ;
	}

	var bufferCanvas = document.getElementById("buffer");
	var displayCanvas = document.getElementById("display");
	var buffer = bufferCanvas.getContext("2d");
	var display = displayCanvas.getContext("2d");

	buffer.drawImage(video,0,0,bufferCanvas.width,bufferCanvas.height);
	var frame = buffer.getImageData(0,0,bufferCanvas.width,bufferCanvas.height);

	var length = frame.data.length/4; // as data array has 4 values r,g,b,alpha for each pixel
	for (var i = 0; i < length; i++) {
		var r = frame.data[i*4 + 0];
		var g = frame.data[i*4 + 1];
		var b = frame.data[i*4 + 2];
		if (effectFunction) {
			effectFunction(i,r,g,b,frame.data);
		}
	}
	display.putImageData(frame,0,0);
}

setTimeout(processFrame,0);

function noir(pos,r,g,b,data) {
	var brightness = (3*r+4*g+b) >>> 3;
	if (brightness < 0) {
		brightness = 0;
	}
	data[pos*4 + 0] = brightness;
	data[pos*4 + 1] = brightness;
	data[pos*4 + 2] = brightness
}