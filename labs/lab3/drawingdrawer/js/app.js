//Angelo Allen
//February 3, 2022
//N220-20816

function setup() {                          //Lines 5-8 create a canvas 800px wide and 600px tall
    createCanvas(800, 600)                  //and makes a black background
    background(0)                           
}

function draw() {                           //Lines 10-12 draw a "car" to the mouse location
    Vehicle(mouseX, mouseY);                
}

function Vehicle(x,y) {                     //Lines 14-25 create the function which will 
    fill(170, 0, 0)                         //create an image at a certain location when
    rect(x - 100, y - 25, 200, 50);         //called
    ellipse(x + 62.5, y + 25, 75);
    ellipse(x - 62.5, y + 25, 75);
    quad(x - 90, y - 25, x - 65, y - 75, x + 15, y - 75, x + 75, y - 25)
    fill(0)
    triangle(x + 15, y - 65, x + 15, y - 25, x + 65, y - 25)
    triangle(x - 80, y - 25, x - 65, y - 65, x - 65, y - 25)
    rect(x - 10, y - 65, 25, 40)
    rect(x - 60, y - 65, 45, 40)
}