//Angelo Allen
//February 24, 2022
//N220-20816

let dvBig = document.getElementById("big");     //Line 5 creates the div element "big"

let numbers = [1000, 2000, 3000, 4000, 5000];   //Line 7 creates an array of five numbers

function list() {                               //Lines 9-17 create a funciton named "list"
let newEl = document.createElement("div");      //that creates an element that will list
                                                //a value in the array "numbers" based on
newEl.innerHTML = numbers[i];                   //the variable "i" when called
newEl.style.margin = "3px";
newEl.style.float = "left";

document.body.appendChild(newEl);
}

for(i = 0; i<numbers.length; i++) {             //Lines 19-21 creat a loop that will call
    list();                                     //the "list" function repeatedly until the
}                                               //"i" value exceeds the array length