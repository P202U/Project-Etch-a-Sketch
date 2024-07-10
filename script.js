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
});