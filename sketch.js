"use strict";

let angle = 0;
let len = 100;

let branchReductionFactor = 0.69;
let middleBranchReductionFactor = 0.43;

let angleSlider;
let angleLabel;

let lenSlider;
let lenLabel;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 10);
    angleSlider = createSlider(0, PI, Math.PI / 6, 0.01);
    lenSlider = createSlider(4, 300, 150, 1);

    // Slider styling
    angleLabel = createDiv("Angle");
    angleLabel.style("position", "absolute");
    angleLabel.style("color", "white");
    angleLabel.style("display", "flex");
    angleLabel.style("flex-direction", "column");
    angleLabel.style("top", "120px");
    angleLabel.style("left", "60px");
    angleSlider.parent(angleLabel);

    lenLabel = createDiv("Length");
    lenLabel.style("position", "absolute");
    lenLabel.style("color", "white");
    lenLabel.style("display", "flex");
    lenLabel.style("flex-direction", "column");
    lenLabel.style("top", "160px");
    lenLabel.style("left", "60px");
    lenSlider.parent(lenLabel);
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
    strokeWeight(map(len, 4, 300, 0, 30));
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * branchReductionFactor);
        pop();

        push();
        rotate(angle / 2);
        branch(len * middleBranchReductionFactor);
        pop();

        push();
        rotate(-angle);
        branch(len * branchReductionFactor);
        pop();
    }
}
