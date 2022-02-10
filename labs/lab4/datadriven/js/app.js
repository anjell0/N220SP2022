//Angelo Allen
//February 10, 2022
//N220-20816

let box = {                                             //Lines 5-10 creates an object, "box" with parameters
    size: 100,                                          //for "size", "color", "x", and "y"
    color: "#780432",
    x: 50,
    y: 50
};

function setup() {                                      //Lines 12-15 create a canvas with dimensions of
    createCanvas(200, 200)                              //200px by 200px and a grey background
    background(150)
}

function draw() {                                       //Lines 17-20 draw to the screen a rectangle with
    trappedBox(box)                                     //parameters of the object "box" with argument 
                                                        //modifications via the "trappedBox" function
}

function trappedBox(b) {                                //Lines 22-26 create a function that takes "b"                                     //as an argument modifies
    fill(b.color)                                       //as an argument and calls variables from the object
    rect(b.x, b.y, b.size, b.size)                      //defined above when called in thedraw function
}