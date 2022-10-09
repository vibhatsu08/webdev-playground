let modalButtons = [...document.querySelectorAll(".modal-buttons")];
modalButtons.forEach (
    function (button) {
        button.onclick = function () {
            let modal = button.getAttribute("data-model");
            document.getElementById(modal).style.display = "block";
        }
    }
);
window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
}