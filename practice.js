// --------------------------------
// API Practice
// --------------------------------

// var url = "https://github.com/AnantVijaySingh/my2018/blob/master/API/practiceData.json"
var url = "API/practiceData.json"
var request = new XMLHttpRequest();

request.onload = function () {
	if (request.status == 200 ) {
		alert(request.responseText);
	} else {
		alert("Check for error");
	}
}

function getData () {
	request.open("GET",url);
	request.send(null); 
}





// ---------------------------------------
// Canvas Practice
// ---------------------------------------

// function canvasFunction () {
// 	var canvas = document.getElementById("canvasElement");
// 	var context = canvas.getContext("2d");
// 	var previewBtn = document.getElementById("previewBtn");
// 	console.log(previewBtn);
// 	previewBtn.addEventListener("click", previewBtnHandler,false)
// 	previewBtn.canvas = canvas;
// 	previewBtn.context = context;


// 	// context.fillStyle = "blue";
// 	// context.fillRect(10,10,100,100);
// }

// function previewBtnHandler (event) {
// 	// console.log(event.currentTarget.canvas);
// 	var selectObj = document.getElementById("shape");
// 	var index = selectObj.selectedIndex;
// 	var shape = selectObj[index].value;

// 	if (shape == "square" ) {
// 		for(var i = 0; i < 20; i++){
// 			drawSquare(event.currentTarget.canvas, event.currentTarget.context);	
// 		}
// 	} else {
// 		// statement
// 	}
// }

// function drawSquare(canvas,context) {
// 	var w = Math.floor(Math.random()*40);
// 	var x = Math.floor(Math.random()*canvas.width);
// 	var y = Math.floor(Math.random()*canvas.height);
// }