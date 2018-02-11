
function canvasFunction () {
	var canvas = document.getElementById("canvasElement");
	var context = canvas.getContext("2d");
	var previewBtn = document.getElementById("previewBtn");
	console.log(previewBtn);
	previewBtn.addEventListener("click", previewBtnHandler,false)
	previewBtn.canvas = canvas;
	previewBtn.context = context;


	// context.fillStyle = "blue";
	// context.fillRect(10,10,100,100);
}

function previewBtnHandler (event) {
	// console.log(event.currentTarget.canvas);
	var canvas = event.currentTarget.canvas;
	var context = event.currentTarget.context;
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	console.log("button press captured");
	context.fillStyle = "white";
	context.fillRect(0,0,canvas.width,canvas.height);
	if (shape == "square" ) {
		for(var i = 0; i < 20; i++){
			drawSquare(event.currentTarget.canvas, event.currentTarget.context);	
		}
	} else {
		// statement
	}
}

function drawSquare(canvas,context) {
	console.log("drawing square");
	var w = Math.floor(Math.random()*40);
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);

	context.fillStyle = "blue";
	context.fillRect(x,y,w,w);
}