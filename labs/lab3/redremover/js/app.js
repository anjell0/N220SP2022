//Angelo Allen
//February 3, 2022
//N220-20816

function draw() {                               //Lines 5-9 define the variable "noRed" to
    noRed = removeRed(color(170, 200, 150));    //call the function "removeRed" and its 
    fill(noRed)                                 //color argument to fill a circle that has
    circle(50, 50, 50);                         //removed the red value from a color
} 

function removeRed(c) {                         //Lines 11-15 create a function that takes
    console.log(c)                              //an argument "c" and defines it to set a
    c.setRed(0)                                 //red value to 0 and then return the result
    return c                                    //as a value when called on
}