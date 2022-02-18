//Angelo Allen
//February 17, 2022
//N220-20816

let dvMcdiv = document.getElementById("mcdiv")  //Line 5 creates the div element "McDiv"

dvMcdiv.innerHTML = "Mc"                        //Line 7 creates a written div that displays "Mc"

function increase() {                           //Line 9-17 creates a function called "increase"
let newEl = document.createElement("div");      //called in the HTML that will create an additional
                                                //div that displays "Div" each time the "Mc" div is
newEl.innerHTML = "Div";                        //clicked aligned from left to right, with 3 pixels
newEl.style.margin = "3px"                      //between each. Line 16 creates the div so it will
newEl.style.float = "left";                     //display on screen

document.body.appendChild(newEl);
}