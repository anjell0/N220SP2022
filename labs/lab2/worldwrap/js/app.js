// Angelo Allen
// January 18, 2022
// N220-20816


var radius = 150   //sets size when "radius" is used for size parameter
var x = 0  //origin x-coordinate
var speed = 5   //ellipse travel speed


function setup() {
    createCanvas(800, 600);   //creates 800x600 canvas
}

function draw() {
background(200); //creates grey background
x += speed;   //makes ellipse move right
if (x > width) {
    x = 0   //if the ellipse reaches the right wall of the canvas, it is forced back to the origin of the left wall of the canvas
}
    fill(0)   //the ellipse is filled with the color black
    ellipse(x, 300, radius, radius)  //creates an ellipse at the x variable and at the y-coordinate of 300px and of the radius variable size
}