var radius = 150
var x = 0
var speed = 5


function setup() {
    createCanvas(800, 600);
    ellipseMode(RADIUS)
}

function draw() {
background(200);
x += speed;
if (x > width) {
    x = 0
}
    fill(0)
    ellipse(x, 300, radius, radius)
}