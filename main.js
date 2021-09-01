'use strict';

let colors = ['red', 'blue', 'green', 'pink', 'brown', 'yellow', 'purple', 'orange',
'aqua', 'navy', 'lime', 'turquoise'];

const button = document.querySelector('button');
const body = document.querySelector('body');
button.addEventListener('click', screensaver);

function screensaver() {
    let randomWidth = Math.floor(Math.random() * 101);
    let randomHeight = Math.floor(Math.random() * 101);
    let randomColor = Math.floor(Math.random() * 12);
    let randomOffsetLeft = Math.floor(Math.random() * 1900)
    let randomOffsetTop = Math.floor(Math.random() * 1000);
    let randomBorderRadius = Math.floor(Math.random() * 101);

    const div = document.createElement('div');
    div.style.width = randomWidth + 'px';
    div.style.height = randomHeight + 'px';
    div.style.backgroundColor = colors[randomColor];
    div.style.borderRadius = randomBorderRadius + 'px';
    div.style.position = 'relative';
    div.style.left = randomOffsetLeft + 'px';
    div.style.top = randomOffsetTop + 'px';
    body.appendChild(div);
}