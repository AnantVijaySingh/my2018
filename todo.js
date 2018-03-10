window.onload = function () {
	var addNoteBtn = document.getElementById("add_button");
	addNoteBtn.addEventListener('click',addNote, false);
	var clearLocalStorageBtn = document.getElementById("clear_button");
	clearLocalStorageBtn.addEventListener('click',clearLocalStorage, false);
	loadNotesFromLocalStorage();
}

function clearLocalStorage () {
	localStorage.clear();
}

function loadNotesFromLocalStorage() {
	if (localStorage.getItem("notesArray")) {
		var notesArray_1 = localStorage.getItem("notesArray");
		var notesArrayParsed = JSON.parse(notesArray_1);
		for(var i = 0; i < notesArrayParsed.length; i++){
			createNoteInDOM(notesArrayParsed[i]);
		}
	} else {
		console.log('No Notes Found');
	}
}


function addNote() {
	var noteText = document.getElementById("note_text").value;
	var colorSelectObj = document.getElementById("color");
	var index = colorSelectObj.selectedIndex;
	var noteColor = colorSelectObj[index].value; 
	var noteId = new Date().getTime();
	var noteObj = {
		text: noteText,
		id: noteId,
		color: noteColor
	};
	if (localStorage.getItem("notesArray")) {
		var notesArray = JSON.parse(localStorage.getItem("notesArray"));
		notesArray.push(noteObj);
		localStorage.setItem("notesArray", JSON.stringify(notesArray));
	} else {
		console.log('Create Array and add');
		var notesArray = [noteObj]; 
		localStorage.setItem("notesArray", JSON.stringify(notesArray));
	}

	createNoteInDOM(noteObj);
}

function createNoteInDOM(noteObj) {
	var noteList = document.getElementById("noteList");
	var noteDiv = document.createElement("div");
	var notePara = document.createElement("p");

	notePara.innerHTML = noteObj.text;
	noteDiv.setAttribute("class",noteObj.color);
	noteDiv.setAttribute("id",noteObj.id);
	noteDiv.appendChild(notePara);
	noteList.appendChild(noteDiv);
}
