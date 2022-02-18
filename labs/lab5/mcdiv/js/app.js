let dvMcdiv = document.getElementById("mcdiv")

dvMcdiv.innerHTML = "Mc"

function increase() {
let newEl = document.createElement("div");


newEl.innerHTML = "Div";
newEl.style.margin = "3px"
newEl.style.float = "left";

document.body.appendChild(newEl);
}