// for opening and closing the modals
let openModalButtons = [...document.querySelectorAll(".modal-buttons")];
openModalButtons.forEach (
    function (button) {
        button.onclick = function () {
            let modal = button.getAttribute("data-model");
            document.getElementById(modal).style.display = "block";
        }
    }
);
let closeModalButtons = [...document.querySelectorAll(".modal-close-button")]
closeModalButtons.forEach (
    function (button) {
        button.onclick = function () {
            let modal = button.closest(".modals");
            modal.style.display = "none";
        }
    }
)

window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
}