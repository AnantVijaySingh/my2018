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
		console.log('Notes Found');
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
		console.log('Array Found');
	} else {
		console.log('Create Array and add');
		var notesArray = [noteObj]; 
		// var notesArray = JSON.stringify(notesArray);
		localStorage.setItem("notesArray", JSON.stringify(notesArray));
	}

	createNoteInDOM(JSON.stringify(noteObj));
}

function createNoteInDOM(note) {
	var noteList = document.getElementById("noteList");
	var noteDiv = document.createElement("div");
	var notePara = document.createElement("p");
	var noteObj = JSON.parse(note);

	notePara.innerHTML = noteObj.text;
	noteDiv.setAttribute("class",noteObj.color);
	noteDiv.setAttribute("id",noteObj.id);
	noteDiv.appendChild(notePara);
	noteList.appendChild(noteDiv);
}