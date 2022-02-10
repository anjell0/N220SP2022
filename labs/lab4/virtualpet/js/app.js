//Angelo Allen
//February 10, 2022
//N220-20816

let pet = {                                         //Lines 5-10 creat an object "pet" with values
    x: 200,                                         //including an x, y, size, and offsetX which
    y: 200,                                         //can be called when necessary
    size: 50,
    offsetX: 1
};

function setup() {                                  //Lines 12-14 create a canvas with dimension of
    createCanvas(800, 600)                          //800px by 600px
};

function draw() {                                   //Lines 16-24 draw an ellipse at an x-coordinate
    background(150)                                 //set by the "pet" object, a y-coordinate that
    ellipse(mouseX + pet.x, mouseY, pet.size)       //follows the mouse's y-coordinate, of a size set
    if (mouseIsPressed && pet.x >= 0) {             //by the "pet" object, and tells the drawing to
        pet.x -= pet.offsetX;                       //move left when the mouse is pressed up to the
    } else if (!mouseIsPressed && pet.x <= 800) {   //mouse's X- coordinate or to move right when it
        pet.x += pet.offsetX;                       //is not pressed
    }
};