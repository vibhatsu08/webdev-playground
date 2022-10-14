const newNoteGroupModalInput = document.getElementById("new-type-modal-input");
const newNoteModalInput = document.getElementById("new-note-modal-input");

let noteGroups = ["programming", "shopping", "books"];
const notesBody = document.getElementById("notes-body");

// for adding the note groups into the DOM.
createNoteGroup = (noteGroups) => {
    let notesGroupFragment = document.createDocumentFragment();

    noteGroups.forEach (
        function (noteGroup) {
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

            notesHeaderDiv.appendChild(notesHeader);
            notesHeaderButtons.appendChild(deleteGroupButton);
            notesHeaderButtons.appendChild(newNoteButton);
            notesHeaderDiv.appendChild(notesHeaderButtons);
            notesDiv.appendChild(notesHeaderDiv);
            notesGroupFragment.appendChild(notesDiv);
        });
    notesBody.appendChild(notesGroupFragment);
}
createNoteGroup(noteGroups);

// for deleting the particular group when the delete group button is clicked.
let deleteGroupButtons = [...document.querySelectorAll(".delete-group-button")];
deleteGroupButtons.forEach (
    function (button) {
        button.onclick = function () {
            let group = button.closest(".notes-div");
            notesBody.removeChild(group);
        }
    }
);


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