//Angelo Allen
//February 3, 2022
//N220-20816


function setup() {                  //Lines 6-9 create a setup function that creates
    createCanvas(800, 600);         //a canvas 800x600 pixels and sets the background
    background(50);                 //to dark grey
}

function draw() {                   //Lines 11-15 draws an ellipse with an origin
    res = new polarPoint(10);       //translated to a new coordinate of (100, 100)
    translate(100, 100);            //while calling the values of the function named
    ellipse(res.x, res.y, 10);      //"polarPoint"
}

function polarPoint(r) {            //Lines 17-21 create a funtion that will cause a
    var x = r * Math.sin(mouseX);   //shape to be drawn with an x and y coordinate
    var y = r * Math.cos(mouseX);   //that reflect the sine and cosine of the mouse's
    return createVector(x,y);       //X-coordinate multplied by the functions argument
}                                   //"r" which is then defined in the draw function

