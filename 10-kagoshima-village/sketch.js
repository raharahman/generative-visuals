function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('lightskyblue');

  //sun
  noStroke()
  fill('gold')
  circle(80, 90, 60)

  //mountain far away 
  fill('grey')
  triangle(180, 290, 225, 180, 270, 290)

  //smoke
  fill('white')
  circle(229, 170, 12)
  circle(236, 158, 16)
  circle(246, 144, 20)

  //hills
  fill('mediumseagreen')
  arc(90, 365, 460, 220, PI, TWO_PI)
  fill('seagreen')
  arc(330, 355, 440, 200, PI, TWO_PI)

  //house 1
  stroke('black')
  strokeWeight(1)
  fill('linen')
  rect(70, 200, 40, 28)
  fill('dimgrey')
  triangle(90, 182, 64, 200, 116, 200)
  fill('indianred')
  rect(76, 212, 10, 16)
  fill('lightyellow')
  rect(92, 206, 12, 12)
  line(98, 206, 98, 218)
  line(92, 212, 104, 212)

  //house 2
  fill('linen')
  rect(130, 214, 52, 34)
  fill('dimgrey')
  triangle(156, 192, 122, 214, 190, 214)
  fill('lightyellow')
  rect(160, 222, 16, 16)
  line(168, 222, 168, 238)
  line(160, 230, 176, 230)

  //house 3
  fill('linen')
  rect(250, 236, 36, 24)
  fill('dimgrey')
  triangle(268, 220, 244, 236, 292, 236)
  fill('indianred')
  rect(255, 244, 8, 16)
  fill('lightyellow')
  rect(270, 241, 10, 10)
  line(275, 241, 275, 251)
  line(270, 246, 280, 246)

  //frontfield
  noStroke()
  fill('darkgreen')
  arc(200, 420, 560, 170, PI, TWO_PI)

  //tea rows
  noFill()
  stroke('lightgreen')
  strokeWeight(4)
  arc(200, 420, 460, 120, PI, TWO_PI)
  arc(200, 420, 280, 62, PI, TWO_PI)
  arc(20, 420, 280, 65, PI, TWO_PI)

  //torii gate
  noStroke()
  fill('firebrick')
  rect(318, 300, 8, 70)
  rect(358, 300, 8, 70)
  rect(306, 292, 72, 9)
  rect(312, 310, 60, 6)

  //title
  fill('black')
  textFont('Courier New')
  textSize(11)
  textAlign(CENTER)
  text("NAT'CHO MATCHA - KAGOSHIMA VILLAGE", 130, 22)
}