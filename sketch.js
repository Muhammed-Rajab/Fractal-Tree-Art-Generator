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

let backgroundColorLabel;
let backgroundColorPicker;

let leafColorLabel;
let leafColorPicker;

let treeColorLabel;
let treeColorPicker;

let leafDegreeLabel;
let leafDegreeSlider;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 10);
    angleSlider = createSlider(0, PI, Math.PI / 6, 0.01);
    lenSlider = createSlider(4, 300, 200, 1);
    treePosXSlider = createSlider(0, width, width / 2, 1);
    leafDegreeSlider = createSlider(0, 10, 2, 1);
    backgroundColorPicker = createColorPicker("white");
    leafColorPicker = createColorPicker("#7b7474");
    treeColorPicker = createColorPicker("black");

    // Slider styling
    angleLabel = createDiv("Angle");
    angleLabel.style("position", "absolute");
    angleLabel.style("display", "flex");
    angleLabel.style("flex-direction", "column");
    angleLabel.style("top", "120px");
    angleLabel.style("left", "60px");
    angleSlider.parent(angleLabel);

    lenLabel = createDiv("Length");
    lenLabel.style("position", "absolute");
    lenLabel.style("display", "flex");
    lenLabel.style("flex-direction", "column");
    lenLabel.style("top", "160px");
    lenLabel.style("left", "60px");
    lenSlider.parent(lenLabel);

    treePosXLabel = createDiv("Tree position X");
    treePosXLabel.style("position", "absolute");
    treePosXLabel.style("display", "flex");
    treePosXLabel.style("flex-direction", "column");
    treePosXLabel.style("top", "200px");
    treePosXLabel.style("left", "60px");
    treePosXSlider.parent(treePosXLabel);

    backgroundColorLabel = createDiv("Background Color");
    backgroundColorLabel.style("position", "absolute");
    backgroundColorLabel.style("display", "flex");
    backgroundColorLabel.style("flex-direction", "column");
    backgroundColorLabel.style("top", "240px");
    backgroundColorLabel.style("left", "60px");
    backgroundColorPicker.parent(backgroundColorLabel);

    leafColorLabel = createDiv("Leaf Color");
    leafColorLabel.style("position", "absolute");
    leafColorLabel.style("display", "flex");
    leafColorLabel.style("flex-direction", "column");
    leafColorLabel.style("top", "290px");
    leafColorLabel.style("left", "60px");
    leafColorPicker.parent(leafColorLabel);

    leafDegreeLabel = createDiv("Leaf Degree");
    leafDegreeLabel.style("position", "absolute");
    leafDegreeLabel.style("display", "flex");
    leafDegreeLabel.style("flex-direction", "column");
    leafDegreeLabel.style("top", "395px");
    leafDegreeLabel.style("left", "60px");
    leafDegreeSlider.parent(leafDegreeLabel);

    treeColorLabel = createDiv("Tree Color");
    treeColorLabel.style("position", "absolute");
    treeColorLabel.style("display", "flex");
    treeColorLabel.style("flex-direction", "column");
    treeColorLabel.style("top", "340px");
    treeColorLabel.style("left", "60px");
    treeColorPicker.parent(treeColorLabel);
}

function draw() {
    background(backgroundColorPicker.color());
    angle = angleSlider.value();
    len = lenSlider.value();
    // angle = map(mouseY, 0, height / 2, 0, TWO_PI);
    // len = map(mouseX, 0, width / 2, 16, 200);
    stroke(treeColorPicker.color());
    translate(treePosXSlider.value(), height);
    branch(len);
}

function branch(len) {
    strokeWeight(map(len, 4, 300, 0, 30));
    if (leafDegreeSlider.value() > 0) {
        if (len * branchReductionFactor ** leafDegreeSlider.value() < 4) {
            stroke(leafColorPicker.color());
        }
    }
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
