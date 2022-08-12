const container = document.querySelector('#container');

let grid = document.createElement('div');
grid.classList.add('grid');

let number = window.prompt("enter a number: ");
let gridNumber = number;

function generateGrid (number) {
    for (let i=1; i<=number*number; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
    container.appendChild(grid);
}


window.addEventListener (
    'load', () => {
        generateGrid(number);
        grid.style.setProperty('--gridNumber', gridNumber);
    }
)