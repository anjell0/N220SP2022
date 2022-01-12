function setup() {
    var lightgreen = "#A8CF52"
    var limegreen = "#B9D8AF"
    var dlightgreen = "#68A55A"
    var dlimegreen = "#7BAD8B"

    createCanvas(800,600);

    background(88, 121, 163);
    strokeWeight(5);

    // body 
    stroke(dlimegreen)
    fill(limegreen)
    ellipse(300, 250, 130, 170)

    // bodyprint
    stroke(lightgreen)
    fill(lightgreen)
    triangle(300, 150, 270, 320, 330, 320)
 
    stroke(lightgreen)
    fill(lightgreen)
    ellipse(300, 315, 60, 30)

    // head
    stroke(dlimegreen);
    fill(limegreen);
    circle(300,122,90);

    strokeWeight(15)
    line(216, 105, 383, 105)

    // face
    strokeWeight(5)
    stroke(0, 0, 0)
    fill(252, 252, 252)
    arc(260, 135, 50, 50, -.25, PI, CHORD)

    stroke(0, 0, 0)
    fill(252, 252, 252)
    arc(340, 135, 50, 50, .1, PI + QUARTER_PI/3.25, CHORD)

    stroke(183, 100, 92)
    fill(238, 131, 115)
    arc(300, 180, 90, 30, 3.14, TWO_PI, CHORD)

    stroke(0, 0, 0)
    strokeWeight(10)
    point(265, 135)

    stroke(0, 0, 0)
    strokeWeight(10)
    point(335, 135)

    // raindish
    strokeWeight(5)
    stroke(dlightgreen);
    fill(lightgreen);
    rect(150,31,300,65);


    noStroke();
    fill(dlightgreen);
    rect(150,80,300,20);

    // name
    stroke(lightgreen)
    strokeWeight(15)
    
    line(110, 355, 110, 430)
    line(110, 430, 150, 430)

    
    fill(88, 121, 163)
    ellipse(200, 395, 60, 80)

    fill(lightgreen)
    line(250, 435, 265, 360)
    line(290, 435, 265, 360)
    line(290, 435, 315, 360)
    line(330, 435, 315, 360)

    noFill()
    arc(368, 378, 45, 38, PI + PI/2.3, PI/1.79, open)
    arc(368, 417, 45, 38, PI + PI/2.3, PI/1.79, open)
    stroke(lightgreen)
    line(360, 358, 360, 435)
    
    stroke(lightgreen)
    noFill()
    line(420, 358, 420, 435)
    arc(429, 380, 45, 45, PI + PI/2.3, PI/1.79, open)
    line(420, 396, 450, 435)

    line(480, 358, 480, 435)
    line(480, 358, 510, 358)
    line(480, 396.5, 510, 396.5)
    line(480, 435, 510, 435)
} 