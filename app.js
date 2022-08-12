// created a variable for finding the element with the container id.
const container = document.querySelector('#container');

// created the grid variable for housing the cells for the array of boxes.
let grid = document.createElement('div');
grid.classList.add('grid');

// user entered number to create a box with equal number of rows and columns.
let number = window.prompt("enter a number: ");
// copied the value of the number in a new variable, to take it as a reference in the later part of the code.
let gridNumber = number;

// function to generate the grid based on the user input number.
function generateGrid (number) {
    for (let i=1; i<=number*number; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    container.appendChild(grid);
}

// this function acts when the window is loaded.
window.addEventListener (
    'load', () => {
        generateGrid(number);
        // sets the required property for the grid.
        grid.style.setProperty('--gridNumber', gridNumber);
    }
)