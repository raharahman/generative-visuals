function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(245, 238, 220);

  noFill();
  stroke(85, 120, 55);
  strokeWeight(4);

  circle(300, 300, 400);
  circle(300, 300, 380);

  //mountain
  triangle(190, 320, 300, 180, 410, 320);

  //smoke
  circle(306, 170, 20);
  circle(320, 148, 26);
  circle(340, 129,28);

  //tea bowl
  arc(300, 320, 280, 200, 0, PI);
  line(160, 320, 440, 320);

  //tea bushes on bowl
  strokeWeight(2)
  arc(300, 320, 200, 120, 0, PI);
  arc(300, 320, 120, 60, 0, PI);

  //title
  noStroke();
  fill(0, 0, 0);
  textFont("Courier New");
  textAlign(CENTER);
  textSize(12);
  text("NAT'CHO MATCHA - SAKURAJIMA BOWL", 150, 30);
}