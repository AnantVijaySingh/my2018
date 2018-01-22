// Global Variables

var goals = ["No binge watching", 
	"Cut sugar by 25%", 
	"Get Fit",
	"Build one app", 
	"Learn a new language",
	"Read 50 books",
	"365 hours of study",
	"Musical instrument",
	"Travel to one new country",
	"Maintain a prioritized to-do list"];
var goalsObj = new Array();

// Initialization Functions
window.onload = init;
function init() {
	createGoalsObjects();
	createGoalsList();
	
	
	var SwitchUIBtn = document.getElementById("SwitchUIBtn");
	var CommentBtn = document.getElementById("CommentBtn")
	SwitchUIBtn.onclick = handleSwitchUIBtnClick;
	CommentBtn.onclick = handleCommentBtnClick;
	var CommentField = document.getElementById("CommentField");
};

function createGoalsList() {
	var listDiv = document.getElementById("listDivId")

	for (var i = 0; i < goals.length; i++) {
		var goalDiv = document.createElement("div");
		goalDiv.innerHTML = goals[i];
		listDiv.appendChild(goalDiv);
	};
};

function createGoalsObjects() {
	for (var i = 0; i < goals.length; i++) {
		goalsObj[i] = {
			id: i,
			goal: goals[i],
			goalType: undefined,
			status: undefined
		};
		console.log(goalsObj[i]);
	};
};


function handleSwitchUIBtnClick() {
	alert("Change UI");
};





// DOM Functions

// Processing Settings
function handleCommentBtnClick() {
	commentData = CommentField.value;
	alert(commentData);
}
