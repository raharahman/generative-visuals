function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightblue');

  //sun
  fill('yellow')
  stroke('orange')
  strokeWeight(3)
  circle(320, 80, 60)

  //hill
  fill('lightgreen')
  stroke('green')
  strokeWeight(2)
  arc(200, 400, 500, 250, PI, TWO_PI)

  //house
  fill('salmon')
  stroke('black')
  rect(170, 230, 80, 70)

  //roof
  fill('red')
  triangle(210, 180, 160, 230, 260, 230)

  //door
  fill('saddlebrown')
  rect(180, 255, 20, 45)

  //window
  fill('lightyellow')
  rect(215, 245, 25, 25)
  line(227, 245, 227, 270)
  line(215, 257, 240, 257)

  //cloud
  fill('white')
  noStroke()
  ellipse(90, 90, 70, 35)
  ellipse(120, 80, 60, 35)
}