'use strict';
// Array of colors
let colors = ['red', 'blue', 'green', 'pink', 'brown', 'yellow', 'purple', 'orange',
'aqua', 'navy', 'lime', 'turquoise'];
// Button, heading and body
const button = document.querySelector('button');
const body = document.querySelector('body');
const text = document.getElementById('text');
// Animation
function screensaver() {
    // Random values for width, height, color, offset and border radius
    let randomWidth = Math.floor(Math.random() * 101);
    let randomHeight = Math.floor(Math.random() * 101);
    let randomColor = Math.floor(Math.random() * 12);
    let randomOffsetLeft = Math.floor(Math.random() * 1801)
    let randomOffsetBottom = Math.floor(Math.random() * 901);
    let randomBorderRadius = Math.floor(Math.random() * 101);
    // New element, assign random values from above and append
    const div = document.createElement('div');
    div.style.width = randomWidth + 'px';
    div.style.height = randomHeight + 'px';
    div.style.backgroundColor = colors[randomColor];
    div.style.borderRadius = randomBorderRadius + 'px';
    div.style.position = 'absolute';
    div.style.left = randomOffsetLeft + 'px';
    div.style.top = randomOffsetBottom + 'px';
    body.appendChild(div);
}
// Run the above function every second on click
button.addEventListener('click', function() { setInterval(screensaver, 1000) });
// Hide the heading and the button on click
button.addEventListener('click', hideText);
// See above
function hideText() {
    text.style.display = 'none';
}