//Angelo Allen
//February 3, 2022
//N220-20816

function draw() {
    
    noRed = removeRed(color(170, 200, 150));
    fill(noRed)
    circle(50, 50, 50);
}

function removeRed(c) {
    console.log(c)
    c.setRed(0)
    return c
}