var radius = 30
var blue = "#0000ff"
var red = "#ff0000"

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(255);
    if (mouseX > 200) {
        fill (255, 0, 0);
    } else if (mouseX < 200) {;
    fill (0, 0, 255);
    }
    ellipse(mouseX, mouseY, radius, radius);
}