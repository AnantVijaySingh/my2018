var goals = ["No binge watching", 
	"Cut sugar by 25%", 
	"Get Fit",
	"Build one app", 
	"Learn a new language",
	"Read 50 books",
	"365 hours of study",
	"Musical instrument",
	"Travel to one new country",
	"Maintain a prioritized to-do list"]

var goalsObj = new Array();

window.onload = init;

function init() {
	createGoalsObjects();
	createGoalsList();
};

function createGoalsList() {
	for (var i = 0; i < goals.length; i++) {
		var mainDiv = document.getElementById("listDivId");
		mainDiv.innerHTML = goals[i];
	};
};

function createGoalsObjects() {
	for (var i = 0; i < goals.length; i++) {
		goalsObj[i] = {
			id: i+1,
			goal: goals[i],
			goalType: 
			goalRemaining: 
			status:
		};
		console.log(goalsObj[i]);
	};
};
