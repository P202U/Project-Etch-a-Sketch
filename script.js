'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    const createGrid = (size) => {

        container.textContent = '';
        const squareSize = 100 / size;

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.style.width = `${squareSize}%`;
            div.style.height = `${squareSize}%`;

            div.addEventListener('mousemove', function (e) {
                this.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${Math.abs(e.offsetX - e.offsetY)})`;
            });

            container.appendChild(div);
        }

        container.style.setProperty('--num-of-divs', size);
    };

    const squareDivs = () => {
        const userInput = prompt('Enter the number of squares per row/column?', 16);

        if (userInput === null) return;

        const squares = parseInt(userInput);

        if (isNaN(squares) || squares <= 0 || squares >= 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }

        return squares;
    };
});