//Angelo Allen
//February 10, 2022
//N220-20816

let box = {                                             //Lines 5-10 creat an object, "box" with parameters
    size: 100,                                          //for "size", "color", "x", and "y"
    color: "#780432",
    x: 50,
    y: 50
};

function setup() {                                      //Lines 12-15 create a canvas with dimensions of
    createCanvas(200, 200)                              //200px by 200px and a grey background
    background(150)
}

function draw() {                                       //Lines 17-21 draw to the screen a rectangle with
    fill(box.color)                                     //parameters of the object "box" and another "box"
    rect(box.x, box.y, box.size, box.size)              //rectangle with argument modifications via the
    trappedBox()                                        //"trappedBox" function
}

function trappedBox(size) {                             //Lines 23-27 create a function that takes "size"
    this.size = box.size/2;                             //as an argument from the "box" object and modifies
    fill("#453712")                                     //it to be drawn at a different "size" than the
    rect(box.x + 25, box.y + 25, this.size, this.size)  //original
}