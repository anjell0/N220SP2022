//Angelo Allen
//February 3, 2022
//N220-20816


function setup() {
    createCanvas(800, 600);
    background(50);
}

function draw() {
    res = new polarPoint(10);
    translate(100, 100);
    ellipse(res.x, res.y, 10);
}

function polarPoint(r) {
    var x = r * Math.sin(mouseX);
    var y = r * Math.cos(mouseX);
    return createVector(x,y);
}

