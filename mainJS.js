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
var time = new Date().getTime();

// Initialization Functions
window.onload = function init() {
	// createGoalsObjects(goals);
	createGoalsList();
	
	var SwitchUIBtn = document.getElementById("SwitchUIBtn");
	var CommentBtn = document.getElementById("CommentBtn")
	SwitchUIBtn.onclick = handleSwitchUIBtnClick;
	CommentBtn.onclick = handleCommentBtnClick;
	var CommentField = document.getElementById("CommentField");

	// Practice Section
	// getLocation();
	// getData();
	canvasFunction();
	videoPage();
};


var goalBoxHTML = function (id,goal) {
	return `<div id=${id} class="goalBox">
				<div class="goalBoxTopDiv">
					<p>${goal}</p>
				</div>
				<div class="goalBoxBottomDiv">
					<span>Status</span><span id="${id}-status"></span>
				</div>
			</div>`;
}


function createGoalsList() {
	var listDiv = document.getElementById("listDivId")

	for (var i = 0; i < goals.length; i++) {
		goalsObj.push(new CreateGoalsObj(goals[i],i));
		console.log(goalsObj[i]);

		var goalDiv = document.createElement("div");
		goalDiv.setAttribute("id",goalsObj[i].id);
		goalDiv.setAttribute("class","goalBox");
		goalDiv.innerHTML = goalsObj[i].goalElement;
		listDiv.appendChild(goalDiv);
	};
	console.log(JSON.stringify(goalsObj))
};

// this is a constructure used to create objects
function CreateGoalsObj(goalText,id) {
	this.id = id;
	this.goalText = goalText;
	this.type = getGoalType(id);
	this.status = getGoalStatus(id);
	this.goalElement = goalBoxHTML(id,goalText);
	// this.modifyGoal = function () {};
	// goalRemaining: function () {};
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






// function getFullscreenContent (content){
// 	return `
// 		<div class='light-box'></div>
// 		<div class='close-btn'>
// 			<img src="${chrome.runtime.getURL('./images/close.png')}" />
// 		</div>
// 		<div class="content-wrapper">
// 			${content}
// 		</div>
// 	`;
// }

// function generateFullScreenElement(content) {
// 	const newElement = document.createElement('div');
// 	newElement.id = 'fullscreen-wapper';
// 	newElement.innerHTML = getFullscreenContent(content);
// 	newElement.querySelector('.close-btn').onclick = hideFullScreen;
// 	return newElement
// }