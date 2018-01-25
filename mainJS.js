/*
STRUTURE
-- Pre define goals statement array
-- define the an array that holds the goal objects for each goal
-- iterate over this array of goals objects and pass the properties of each goal to a goals div box creator
-- the goals div box creator function pushes the content of each goal into a div and injects it in the HTML 
*/

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
		// console.log(goalsObj[1]);
	};
	console.log(goalsObj[2].goal);
	createGoalsDivBoxes();
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




// Iterate over the object and add the values to the goals div boxes
function createGoalsDivBoxes() {
	goalsObj.forEach( function(element, index) {
		function injectGoalDivBoxes
		for (property in element) {
			console.log(element[property]);
		}
	});
}


// DOM Functions

// Processing Settings
function handleCommentBtnClick() {
	commentData = CommentField.value;
	alert(commentData);
}
