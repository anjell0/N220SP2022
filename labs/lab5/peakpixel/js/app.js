//Angelo Allen
//February 17, 2022
//N220-20816

let dvPlant = document.getElementById("plant")      //Lines 5-6 create a div element called "plant"
let size = 100                                      //and a variable called size defined with a
                                                    //value of 100

dvPlant.style.backgroundColor = "#00FF00"           //Lines 9-11 style the div to be green with
dvPlant.style.height = size + "px"                  //dimensions relative to the "size" variable
dvPlant.style.width = size + "px"                   //with the added px at the end

function grow() {                                   //Lines 13-19 define a function called "grow"
    let newHeight = dvPlant.offsetHeight * 1.1;     //called on in the HTML with defined variables
    let newWidth = dvPlant.offsetWidth * 1.1;       //for "newHeight" and "newWidth" with values
                                                    //defined as the plant div's height and width
    dvPlant.style.height = newHeight + "px"         //offsets multiplied by 1.1 so that which each
    dvPlant.style.width = newWidth + "px"           //click, the div will "grow"
}