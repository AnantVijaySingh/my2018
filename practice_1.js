function canvasFunction (argument) {
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
	console.log(event.currentTarget.canvas);
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	if (shape == "square" ) {
		
	} else {
		// statement
	}
}
