//Angelo Allen
//February 24, 2022
//N220-20816

for(i = 1; i<25; i++) {                                  //Lines 5-7 start a loop that will run
    list()                                               //the function "list" as long as the
}                                                        //"i" value is less than 25

function list() {                                        //Lines 9-28 create a function "list"
let newEl = document.createElement("div");               //that creates a new element that
                                                         //prints the numbers 1-25 such that
newEl.innerHTML = i;                                     //if the number is divisible by 3, it
    if (i == 3 || i == 6 || i == 9 || i == 12 ||         //will print a blue "beep" instead; if
        i == 18 || i == 21 || i == 24) {                 //the number is divisible by 5, it
    newEl.innerHTML = "beep"                             //will print a red "bop" instead, and
    newEl.style.color = "#0000FF"                        //a green "beepbop" if the number is
}   else if (i == 5 || i == 10 || i == 20 || i == 25) {  //divisible by 3 and 5 (15).
    newEl.innerHTML = "bop"
    newEl.style.color = "#FF0000"
}   else if (i == 15) {
    newEl.innerHTML = "beepbop"
    newEl.style.color = "#00FF00"
}
newEl.style.margin = "3px";
newEl.style.float = "left";

document.body.appendChild(newEl);
}