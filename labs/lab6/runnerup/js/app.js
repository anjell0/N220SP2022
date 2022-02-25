//Angelo Allen
//February 24, 2022
//N220-20816

let dvRace = document.getElementById("race")        //Line 5 creates the div element "race"

let times = [7.43, 7.58, 8.04]                      //Line 7 creates an array of three numbers named "times"

for(i = 0; i<times.length; i++) {                   //Lines 9-11 create a loop that calls the "scores" function
    scores()                                        //as many times as there are items in the "times" array
}

function scores() {                                 //Lines 13-26 create a function that when called will print
    let newEl = document.createElement("div");      //to a div the text "1st", "2nd", or "3rd" alongside the
                                                    //current item in the array in descending sizes depending on
    newEl.innerHTML = "1st: " + times[i];           //which array item is being targeted
    newEl.style.fontSize = "150px";
    if(i == 1) {
    newEl.innerHTML = "2nd: " + times[1];
    newEl.style.fontSize = "75px"
}   else if(i == 2) {
    newEl.innerHTML = "3rd: " + times[2];
    newEl.style.fontSize = "37.5px"
}
    document.body.appendChild(newEl);
}