window.onload = function () {
	var addNoteBtn = document.getElementById("add_button");
	addNoteBtn.addEventListener('click',addNote, false);
}

function addNote() {
	var noteText = document.getElementById("note_text").value;
	

	createNoteInDOM(noteText);
}

function createNoteInDOM(noteText) {
	var noteList = document.getElementById("noteList");
	var noteDiv = document.createElement("div");
	var notePara = document.createElement("p");
	notePara.innerHTML = noteText;
	noteDiv.appendChild(notePara);
	noteList.appendChild(noteDiv);
}