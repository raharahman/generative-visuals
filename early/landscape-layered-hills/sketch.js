function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightskyblue');

  //sun
  noStroke()
  fill('gold')
  circle(300, 110, 70)

  //back hill
  fill('mediumseagreen')
  arc(80, 400, 420, 300, PI, TWO_PI)

  //middle hill
  fill('seagreen')
  arc(330, 400, 460, 240, PI, TWO_PI)

  //front hill
  fill('darkgreen')
  arc(200, 420, 520, 160, PI, TWO_PI)

  //field lines
  noFill()
  stroke('lightgreen')
  strokeWeight(4)
  arc(200, 420, 440, 120, PI, TWO_PI)
  arc(200, 420, 280, 60, PI, TWO_PI)
  arc(200, 420, 280, 60, PI, TWO_PI)

  //small house
  fill('salmon')
  stroke('black')
  strokeWeight(1)
  rect(300, 270, 30, 25)
  fill('red')
  triangle(315, 252, 295, 270, 335, 270)
}