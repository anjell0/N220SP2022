//Angelo Allen
//February 17, 2022
//N220-20816

let dvOao = document.getElementById("oao")          //Line 5 creates a dive element titled "oao"

dvOao.style.backgroundColor = "#0000FF"             //Line 7-9 creates a blue square div with
dvOao.style.height = "100px"                        //dimensions of 100px by 100px
dvOao.style.width = "100px"

function change() {                                 //Lines 11-13 create a function called "change"
    dvOao.style.backgroundColor = "#000000"         //that is called in the HTML that will change
}                                                   //the box's color to black when the mouse is
                                                    //hovering over it

function goBack() {                                 //Lines 16-18 creat a function called "goBack"
    dvOao.style.backgroundColor = "#0000FF"         //that is called in the HTML that will change
}                                                   //the box's color back to blue when the mouse
                                                    //no longer hovers over the div