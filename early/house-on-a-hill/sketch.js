function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('pink');
  fill('brown')
  stroke('orange')
  square(50,50, 300)
  square(60,60,280)
  square(30,30,30)
  square(35,35,20)
  square(340,30,30)
  square(345,35,20)
  square(30,340,30)
  square(35,345,20)
  square(340,340,30)
  square(345,345,20)

  
  fill('lightblue')
  stroke('orange')
  square(75,75, 250)

  fill('lightgreen')
  stroke('green')
  arc(200,325, 250,100, PI, TWO_PI)

  fill('salmon')
  stroke('black')
  rect(200,200,80,95)

  fill('red')
  stroke('black')
  triangle(240, 150, 200, 200, 280, 200)

  fill('yellow')
  stroke('orange')
  strokeWeight(3)
  circle(300,100,40,400)

  // door on the left
fill('saddlebrown')
stroke('black')
rect(205, 235, 20, 60)

  // long window on the right
fill('lightyellow')
stroke('black')
rect(235, 215, 35, 45)

  // 4 window lines
line(252.5, 215, 252.5, 260) // vertical middle
line(235, 230, 270, 230)     // top horizontal
line(235, 245, 270, 245)     // middle horizontal
line(235, 260, 270, 260)     // bottom horizontal
  
}