"use strict";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    stroke(255);
    translate(200, height);
    branch(100);
}

function branch(len) {
    line(0, 0, 0, -len);
}
