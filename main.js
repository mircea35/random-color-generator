var x = Math.round(Math.random() * 256);
var y = Math.round(Math.random() * 256);
var z = Math.round(Math.random() * 256);

var root = document.querySelector(':root');

function SetRandColor() {
    root.style.setProperty('--x', x);
    root.style.setProperty('--y', y);
    root.style.setProperty('--z', z);
}

SetRandColor();