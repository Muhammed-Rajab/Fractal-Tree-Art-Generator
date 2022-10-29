"use strict";

let angle = 0;
let len = 100;
let angleSlider;
let lenSlider;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 10);
    angleSlider = createSlider(0, PI, Math.PI / 3, 0.01);
    lenSlider = createSlider(4, 200, 100, 1);

    // Slider styling
    angleSlider.style("position", "absolute");
    angleSlider.style("top", "120px");
    angleSlider.style("left", "60px");

    lenSlider.style("position", "absolute");
    lenSlider.style("top", "140px");
    lenSlider.style("left", "60px");
}

function draw() {
    background(51);
    angle = angleSlider.value();
    len = lenSlider.value();
    // angle = map(mouseY, 0, height / 2, 0, TWO_PI);
    // len = map(mouseX, 0, width / 2, 16, 200);
    stroke(255);
    translate(width / 2, height);
    branch(len);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
}
