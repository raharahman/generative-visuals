function setup() {
  createCanvas(600, 600);
}

//night sky
function draw() {
  background(20, 30, 45);

  //stars
  stroke(255);
  strokeWeight(3);
  point(60, 60);
  point(150, 110);
  point(390, 40);
  point(540,220);
  point(220, 50);
  point(500, 90);

  //moon
  noStroke();
  fill(240, 235, 200);
  circle(110, 160, 80);
  fill(20, 30, 45);
  circle(130, 148, 72);

  //mountain
  fill(40, 55, 50);
  triangle(180, 400, 380, 120, 580, 400);
  
  //smoke 
  fill(255, 160, 90, 150);
  circle(372, 96, 34);
  circle(345, 66, 46);
  circle(305, 34, 58);

  //ground
  fill(30, 50, 35);
  rect(0, 390, 600, 210);

  //tea bushes
  noFill();
  stroke(150, 200, 120);
  strokeWeight(2);
  arc(300, 640, 220, 160, PI, TWO_PI);
  arc(300, 640, 420, 280, PI, TWO_PI);
  arc(300, 640, 620, 400, PI, TWO_PI);
  arc(300, 640, 820, 500, PI, TWO_PI);

  //horizon
  strokeWeight(1);
  line(0, 390, 40, 390);
  line(70, 390, 110, 390);
  line(140, 390, 180, 390);
  line(210, 390, 250, 390);
  line(280, 390, 320, 390);
  line(350, 390, 390, 390);
  line(420, 390, 460, 390);
  line(490, 390, 530, 390);
  line(560, 390,600, 390);

  //flower
  noStroke();
  fill(200, 190, 230);
  ellipse(510, 470, 22, 34);
  ellipse(510, 500, 22, 34);
  ellipse(495, 485, 34, 22);
  ellipse(525, 485, 34, 22);
  fill(240, 235, 200);
  circle(510, 485, 16);

  //title
  noStroke();
  fill(240, 235, 200);
  textFont("Courier New");
  textSize(12);
  textAlign(CENTER);
  text("NAT'CHO MATCHA - KAGOSHIMA NIGHT", 150, 30);
}