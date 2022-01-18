// Angelo Allen
// January 18, 2022
// N220-20816


var radius = 30   //sets size when "radius" is used for size parameter

function setup() {
    createCanvas(400, 300);   //creates 400x300 canvas
}

function draw() {
    background(255);   //creates white background
    if (mouseX > 200) {
        fill (255, 0, 0);   //if the mouse is on the right side of the Canvas center (200px) the ellipse will be red
    } else if (mouseX < 200) {;
    fill (0, 0, 255);  //if the mouse is on the left side of the canvas center (200px) the ellipse will be blue
    }
    ellipse(mouseX, mouseY, radius, radius);  //creates an ellipse at the x and y variable of the mouse cursor and of the radius variable size
}