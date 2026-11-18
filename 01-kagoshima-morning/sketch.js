function setup() {
  createCanvas(600, 600);
  console.log("Nat'Cho Matcha - Kagoshima Morning")
console
}

function draw() {
  //sky
  background(245,238,220); //cream colour numbers clarified by AI

  //sun
  noStroke();
  fill(240, 190, 120);
  circle(470, 140, 110); //AI supported x, y, diameter

  //mountain sakurajima 
  fill(120, 140, 110);
  triangle(60, 390, 260, 150, 460, 390); // AI supported triangle points 

  //mountain smoke 
  fill(255, 255, 255, 200); 
  circle(260,122,36);
  circle(292, 92, 48);
  circle(326, 58, 62);

  //tea field
  fill(110, 150, 70);
  rect(0, 380, 600, 220);

  //tea bushes
  noFill();
  stroke(70, 110, 45);
  strokeWeight(8);
  arc(300, 640, 220, 160, PI, TWO_PI)
  arc(300, 640, 620, 400, PI, TWO_PI);
  arc(300, 640, 820, 500, PI, TWO_PI);

  //horizon
  stroke(90, 120, 60);
  strokeWeight(2);
  line(0, 380, 600, 380);

  //flowers - AI used for coordinates and colours.
  noStroke();
  fill(250, 200, 210);
  ellipse(90, 470, 22, 34);
  ellipse(90, 500, 22, 34);
  ellipse(75, 485, 34, 22);
  ellipse(105, 485, 34, 22);
  fill(240, 190, 120);
  circle(90, 485, 16);

  //title
  noStroke();
  fill(0, 0, 0); 
  textFont("Courier New")
  textSize(12);
  textAlign(CENTER);
  text("NAT'CHO MATCHA - KAGOSHIMA MORNING", 150, 30);
}

  