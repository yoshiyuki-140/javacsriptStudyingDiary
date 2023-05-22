
function Pen(color, length) {
    this.color = color;
    this.length = length;
    this.draw = function draw() {
        this.length -= 0.01;
    };
}

let penR = new Pen("red", 5);
let penG = new Pen("green", 15);
let penB = new Pen("blue", 7);
let pen = penR;

function stroke() {
    pen.draw();
    document.getElementById("color").textContent = pen.color;
    document.getElementById("length").textContent = pen.length;
}

function pickR() {
    pen = penR();
}

function pickG() {
    pen = penG;
}

function pickB() {
    pen = penB;
}
