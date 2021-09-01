'use strict';

let colors = ['red', 'blue', 'green', 'pink', 'brown', 'yellow', 'purple', 'orange',
'aqua', 'navy', 'lime', 'turquoise'];

const button = document.querySelector('button');
const body = document.querySelector('body');
button.addEventListener('click', screensaver);

function screensaver() {
    setInterval(function() {
        let randomWidth = Math.floor(Math.random() * 101);
        let randomHeight = Math.floor(Math.random() * 101);
        let randomColor = Math.floor(Math.random() * 12);
        let randomOffsetLeft = Math.floor(Math.random() * 1801)
        let randomOffsetBottom = Math.floor(Math.random() * 901);
        let randomBorderRadius = Math.floor(Math.random() * 101);

        const div = document.createElement('div');
        div.style.width = randomWidth + 'px';
        div.style.height = randomHeight + 'px';
        div.style.backgroundColor = colors[randomColor];
        div.style.borderRadius = randomBorderRadius + 'px';
        div.style.position = 'absolute';
        div.style.left = randomOffsetLeft + 'px';
        div.style.top = randomOffsetBottom + 'px';
        body.appendChild(div);
    }, 1000);
}