// Angelo Allen
// February 10, 2022
// N220-20816

let ball = {                                    //Lines 5-12 create an object "ball" with
    x: 45,                                      //properties for an "x", "y", "velocity",
    y: 45,                                      //"xdirection", "ydirection", and "size"
    velocity: 5,
    xdirection: 1,
    ydirection: 1,
    size: 45
}


function setup() {                              //Lines 15-17 create a canvas with
    createCanvas(800, 600);                     //dimensions of 800px by 600px
}

function draw() {                               //Lines 19-32 draw an ellipse that will
    background(205);                            //have a moving x and y-coordinate that 
    ball.x += ball.velocity * ball.xdirection;  //will inverse based on whether or not
    ball.y += ball.velocity * ball.ydirection;  //the ellipse drawn with "ball" properties
    if ((ball.x > width-ball.size) ||           //comes in contact with the left/right
    (ball.x < 0 + ball.size)) {                 //and/or top/bottom of the canvas
        ball.xdirection = -ball.xdirection;
    }
    if ((ball.y > height-ball.size) || 
    (ball.y < 0 + ball.size)) {
        ball.ydirection = -ball.ydirection;
    }
    ellipse(ball.x, ball.y, ball.size)
}