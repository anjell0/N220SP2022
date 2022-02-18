let dvPlant = document.getElementById("plant")
let size = 100

dvPlant.style.backgroundColor = "#00FF00"
dvPlant.style.height = size + "px"
dvPlant.style.width = size + "px"


function grow() {
    let newHeight = dvPlant.offsetHeight * 1.1;
    let newWidth = dvPlant.offsetWidth * 1.1;

    dvPlant.style.height = newHeight + "px"
    dvPlant.style.width = newWidth + "px"

}