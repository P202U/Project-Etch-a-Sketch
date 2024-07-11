'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const button = document.querySelector('button');
    let numSquares = 0;

    const initializeGrid = () => {
        numSquares = getGridSizeFromUser();
        if (numSquares !== null) {
            createGrid(numSquares);
        }
    };

    const getGridSizeFromUser = () => {
        const userInput = prompt('Enter the number of squares per row/column?', 16);
        if (userInput === null) {
            return null;
        }
        const squares = parseInt(userInput);
        if (isNaN(squares) || squares <= 0 || squares >= 100) {
            alert('Please enter a valid number between 1 and 100.');
            return null;
        }
        return squares;
    };

    const createGrid = (size) => {
        clearContainer();
        const squareSize = 100 / size;

        for (let i = 0; i < size * size; i++) {
            const div = createSquareDiv(squareSize);
            container.appendChild(div);
        }

        container.style.setProperty('--num-of-divs', size);
    };

    const createSquareDiv = (squareSize) => {
        const div = document.createElement('div');
        div.style.width = `${squareSize}%`;
        div.style.height = `${squareSize}%`;

        div.addEventListener('mousemove', mouseMoveBgColor);

        return div;
    };

    const mouseMoveBgColor = (e) => {
        const div = e.target;
        const { offsetX, offsetY } = e;
        div.style.backgroundColor = `rgb(${offsetX}, ${offsetY}, ${Math.abs(offsetX - offsetY)})`;
    };

    const clearContainer = () => {
        container.textContent = '';
    };

    initializeGrid();

    button.addEventListener('click', () => {
        initializeGrid();
    });
});