// Angelo Allen
// January 18, 2022
// N220-20816


var radius = 45   //sets size when "radius" is used for size parameter
var x = 45  //origin x-coordinate
var y = 45  //origin y-coordinate
var speed = 5   //ellipse travel speed
var xdirection = 1   //x-axis travel direction default right
var ydirection = 1   //y-axis travel direction default down

function setup() {
    createCanvas(800, 600);   //creates 800x600 canvas
}

function draw() {
    background(205);  //grey background
    x += speed * xdirection;   //makes ellipse move left/right
    y += speed * ydirection;   //makes ellipse move up/down
    if ((x > width-radius) || (x < 0+radius)) {
        xdirection = -xdirection;  //if the ellipse touches the left or right wall, it will begin moving in the opposite x direction
    }
    if ((y > height-radius) || (y < 0+radius)) {
        ydirection = -ydirection;   //if the ellipse touches the top or bottom wall, it will begin moving in the opposite y direction
    }

    ellipse(x, y, radius, radius)   //creates an ellipse at the x and y variable locations and of the radius variable size
}