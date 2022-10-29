"use strict";

let angle = 0;
let len = 100;

let branchReductionFactor = 0.69;
let middleBranchReductionFactor = 0.45;

let angleSlider;
let angleLabel;

let lenSlider;
let lenLabel;

let treePosXSlider;
let treePosXLabel;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 10);
    angleSlider = createSlider(0, PI, Math.PI / 6, 0.01);
    lenSlider = createSlider(4, 300, 150, 1);
    treePosXSlider = createSlider(0, width, width / 2, 1);

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

    treePosXLabel = createDiv("Tree position X");
    treePosXLabel.style("position", "absolute");
    treePosXLabel.style("color", "white");
    treePosXLabel.style("display", "flex");
    treePosXLabel.style("flex-direction", "column");
    treePosXLabel.style("top", "200px");
    treePosXLabel.style("left", "60px");
    treePosXSlider.parent(treePosXLabel);
}

function draw() {
    background(51);
    angle = angleSlider.value();
    len = lenSlider.value();
    // angle = map(mouseY, 0, height / 2, 0, TWO_PI);
    // len = map(mouseX, 0, width / 2, 16, 200);
    stroke(255);
    translate(treePosXSlider.value(), height);
    branch(len, branchReductionFactor);
}

function branch(len, reductionFactor) {
    len *= reductionFactor;
    strokeWeight(map(len, 4, 300, 0, 30));
    if (len * reductionFactor ** 2 < 4) {
        stroke("pink");
    }
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        branch(len, reductionFactor);
        pop();

        push();
        rotate(angle / 2);
        branch(len, reductionFactor - 0.07);
        pop();

        push();
        rotate(-angle);
        branch(len, reductionFactor);
        pop();
    }
}
