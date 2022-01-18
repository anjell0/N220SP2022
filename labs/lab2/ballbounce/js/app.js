var radius = 45
var x = 45
var y = 45
var speed = 5
var xdirection = 1
var ydirection = 1

function setup() {
    createCanvas(800, 600);
    ellipseMode(RADIUS)
}

function draw() {
    background(205);
    x += speed * xdirection;
    y += speed * ydirection;
    if ((x > width-radius) || (x < 0+radius)) {
        xdirection = -xdirection;
    }
    if ((y > height-radius) || (y < 0+radius)) {
        ydirection = -ydirection;
    }

    ellipse(x, y, radius, radius)
}