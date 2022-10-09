let modalButtons = [...document.querySelectorAll(".modal-buttons")];
modalButtons.forEach (
    function (button) {
        button.onclick = function () {
            let modal = button.getAttribute("data-model");
            document.getElementById(modal).style.display = "block";
        }
    }
);
let closeButtons = [...document.querySelectorAll(".modal-close-button")]
closeButtons.forEach (
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