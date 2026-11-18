let mountainPeak = 150;
let smokeSize = 1;
let flowerR = 250;
let flowerG = 200;
let flowerB = 210;

let smokeRise = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  // changing morning to night
  let t = map(mouseX, 0, width, 0, 1, true);

  //changing sky colours
  let skyR = map(t, 0, 1, 245, 20);
  let skyG = map(t, 0, 1, 238, 30);
  let skyB = map(t, 0, 1, 220, 45);
  background(skyR, skyG, skyB);

  //fading stars
  let starAlpha = map(t, 0.5, 1, 0, 255, true);
  stroke(255, starAlpha);
  point(60, 60);
  point(150, 110);
  point(390, 40);
  point(540, 220);
  point(220, 50);

  //setting sun 
  let sunY = map(t, 0, 1, 140, 470);
  noStroke();
  fill(240, 190, 120);
  circle(470, sunY, 110);

  //mountain changing colour
  let mountainShade = map(t, 0, 1, 130, 45);
  fill(mountainShade - 10, mountainShade, mountainShade - 20);
  triangle(60, 390, 260, mountainPeak, 460, 390);

  //animated smoke 
  smokeRise = smokeRise + 0.5;
  if (mouseIsPressed) {
    smokeRise = smokeRise + 1.5;
  }
  if (smokeRise > 40) {
    smokeRise = 0;
  }
  let puff = smokeSize;
  if (mouseIsPressed) {
    puff = smokeSize * 1.6;
  }
  let smokeAlpha = map(smokeRise, 0, 40, 220, 0);
  fill(255,255,255, smokeAlpha);
  circle(268, mountainPeak - 28 - smokeRise, 36 * puff);
  circle(292, mountainPeak - 58 - smokeRise, 48 * puff);
  circle(326, mountainPeak - 92 - smokeRise, 62 * puff);

  //tea bushes
  let groundG = map(t, 0, 1, 150, 50);
  fill(groundG - 40, groundG, groundG - 80);
  rect(0, 380, 600, 220);

  noFill();
  stroke(70,110,45);
  strokeWeight(8);
  arc(300, 640, 220, 160, PI, TWO_PI);
  arc(300, 640, 420, 280, PI, TWO_PI);
  arc(300, 640, 620, 400, PI, TWO_PI);
  arc(300, 640, 820, 500, PI, TWO_PI);

  //flower
  noStroke();
  fill(flowerR, flowerG, flowerB);
  ellipse(90, 470, 22, 34);
  ellipse(90, 500, 22, 34);
  ellipse(75, 485, 34, 22);
  ellipse(105, 485, 34, 22);
  fill(240, 190, 120);
  circle(90, 485, 16);

  //title animation
  let textShade = map(t, 0, 1, 0, 240);
  fill(textShade);
  textFont("Courier New");
  textSize(12);
  textAlign(CENTER);
  if (t < 0.5) {
    text("NAT'CHO MATCHA - KAGOSHIMA MORNING", 150, 30);
  } else {
    text("NAT'CHO MATCHA - KAGOSHIMA NIGHT", 150, 30);
  }

  // TO SAVE PRESS S
  function keyPressed() {
    if (key === 's' || key === 'S') {
      saveCanvas("natcho-kagoshima","png");
    }
  }
}