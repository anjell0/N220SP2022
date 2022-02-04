//Angelo Allen
//February 3, 2022
//N220-20816

function setup() {
    createCanvas(800, 600)  //creates a canvas 800px wide and 600px tall
    background(0)  //makes a black background
}

function draw() {
    Vehicle(mouseX, mouseY);  //draws a "car" to the mouse location
}

function Vehicle(x,y) {  //Lines 13 - 45 create the function which will create a shape at a certain location when called

fill(170, 0, 0)

rect(x - 100, y - 25, 200, 50);

ellipse(x + 62.5, y + 25, 75);

ellipse(x - 62.5, y + 25, 75);

quad(x - 90, y - 25, x - 65, y - 75, x + 15, y - 75, x + 75, y - 25)

fill(0)

triangle(x + 15, y - 65, x + 15, y - 25, x + 65, y - 25)

triangle(x - 80, y - 25, x - 65, y - 65, x - 65, y - 25)

rect(x - 10, y - 65, 25, 40)

rect(x - 60, y - 65, 45, 40)
}