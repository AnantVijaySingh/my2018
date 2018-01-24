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
window.onload = function init() {
	createGoalsObjects();
	createGoalsList();
	
	var SwitchUIBtn = document.getElementById("SwitchUIBtn");
	var CommentBtn = document.getElementById("CommentBtn")
	SwitchUIBtn.onclick = handleSwitchUIBtnClick;
	CommentBtn.onclick = handleCommentBtnClick;
	var CommentField = document.getElementById("CommentField");
};


// var goalBoxHTML = function (id,goal) {
// 	return '<div id=${id} class="goalBox">
// 				<div>
// 					<p>${goal}</p>
// 				</div>
// 				<div>
// 					<span>Status</span><span id="${id}-status"></span>
// 				</div>
// 			</div>'
// }


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
			type: getGoalType(i),
			status: getGoalStatus(i)
		};
		console.log(goalsObj[i]);
	};
};


function handleSwitchUIBtnClick() {
	alert("Change UI");
};

function getGoalType (id) {
	return "type"
};

function getGoalStatus (id) {
	return "status"
};



// DOM Functions

// Processing Settings
function handleCommentBtnClick() {
	commentData = CommentField.value;
	alert(commentData);
}
