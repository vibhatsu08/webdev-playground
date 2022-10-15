const newNoteGroupModalInput = document.getElementById("new-type-modal-input");
const newNoteModalInput = document.getElementById("new-note-modal-input");

const newNoteGroupModalDoneButton = document.getElementById("type-done-button");
const newNoteModalDoneButton = document.getElementById("note-done-button");

// const deleteGroupButton = document.querySelectorAll(".delete-group-button");


const notesBody = document.getElementById("notes-body");


newNoteGroupModalDoneButton.addEventListener (
    "click", function () {
        console.log(newNoteGroupModalInput.value);
        createNoteGroupSingle(newNoteGroupModalInput.value);
    }
);
newNoteModalDoneButton.addEventListener (
    "click", function () {
        console.log(newNoteModalInput.value);
        createNoteSingle(newNoteModalInput.value);
    }
); 

createNoteGroupSingle = (noteGroup) => {
    let noteGroupFragment = document.createDocumentFragment();
        
    let notesDiv = document.createElement("div");
    let notesHeaderDiv = document.createElement("div");
    let notesHeader = document.createElement("div");
    let notesHeaderButtons = document.createElement("div");
            
    let deleteGroupButton = document.createElement("button");
    let newNoteButton = document.createElement("button");

    notesDiv.classList.add("notes-div");
    notesHeaderDiv.classList.add("notes-header-div");
    notesHeader.classList.add("notes-header");
    notesHeaderButtons.classList.add("notes-header-buttons");
    deleteGroupButton.classList.add("delete-group-button");
    newNoteButton.classList.add("new-note-button");
    newNoteButton.classList.add("modal-buttons");

    notesHeader.textContent = noteGroup;
    deleteGroupButton.textContent = "delete group";
    newNoteButton.textContent = "new note";
    newNoteButton.setAttribute("data-model", "new-note-modal");

    notesHeaderDiv.appendChild(notesHeader);
    notesHeaderButtons.appendChild(deleteGroupButton);
    notesHeaderButtons.appendChild(newNoteButton);
    notesHeaderDiv.appendChild(notesHeaderButtons);
    notesDiv.appendChild(notesHeaderDiv);
    noteGroupFragment.appendChild(notesDiv);
    notesBody.appendChild(notesDiv);

    return notesDiv;
}

createNoteSingle = (noteValue) => {
    let noteFragment = document.createDocumentFragment();

    let notes = document.createElement("div");
    let note = document.createElement("div");
    let noteText = document.createElement("div");
    let noteButtons = document.createElement("div");

    let noteEditButton = document.createElement("button");
    let noteDoneButton = document.createElement("button");
    let noteDeleteButton = document.createElement("button");

    notes.classList.add("notes");
    note.classList.add("note");
    noteText.classList.add("note-text");
    noteButtons.classList.add("note-buttons");
    noteEditButton.classList.add("note-edit-button");
    noteDoneButton.classList.add("note-done-button");
    noteDeleteButton.classList.add("note-delete-button");

    noteText.textContent = noteValue;
    noteEditButton.textContent = "edit";
    noteDoneButton.textContent = "done";
    noteDeleteButton.textContent = "delete";

    note.appendChild(noteText);
    noteButtons.appendChild(noteEditButton);
    noteButtons.appendChild(noteDoneButton);
    noteButtons.appendChild(noteDeleteButton);
    notes.appendChild(note);
    notes.appendChild(noteButtons);
    notesDiv.appendChild(notes);
    noteFragment.appendChild(notesDiv);
    notesBody.appendChild(noteFragment);
}

// for opening the modals
let openModalButtons = [...document.querySelectorAll(".modal-buttons")];
openModalButtons.forEach (
    function (button) {
        button.onclick = function () {
            let modal = button.getAttribute("data-model");
            document.getElementById(modal).style.display = "block";
        }
    }
);
// for closing the modals
let closeModalButtons = [...document.querySelectorAll(".modal-close-button")];
closeModalButtons.forEach (
    function (button) {
        button.onclick = function () {
            let modal = button.closest(".modals");
            modal.style.display = "none";
        }
    }
);