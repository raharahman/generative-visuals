let flowerX = [190, 400, 300];
let flowerY = [230, 300, 420];
let flowerSize = [60, 40, 30];

function setup() {
  createCanvas(600, 600);
}

// matcha bowl and matcha
function draw() {
  background(245, 238, 220);

  noStroke();
  fill(60, 70, 55);
  circle(300, 300, 540);
  fill(140, 175, 95);
  circle(300, 300, 500);

// matcha ripples 
for (let i = 0; i < flowerX.length; i++) {
  drawRipple(flowerX[i], flowerY[i], flowerSize[i] * 4);
}
  //flowers
for (let i = 0; i < flowerX.length; i++) {
  drawFlower(flowerX[i], flowerY[i], flowerSize[i], 5, frameCount * 0.003 * (i+1));
}
//title
noStroke();
fill(0);
textFont("Courier New");
textSize(12);
textAlign(CENTER);
text("NAT'CHO MATCHA - CALM", 100, 30);
}

// Function 1 - rings spreading out from point 
function drawRipple(x, y, maxSize) {
  noFill();
  strokeWeight(1.5);
  let gap = 20;
  let grow = (frameCount * 0.3) % gap;

for (let size = grow; size < maxSize; size = size + gap) {
  let fade = map(size, 0, maxSize, 180, 0); 
  stroke(220, 235, 180, fade);
  circle(x, y, size);
  }
}

// flower 
function drawFlower(x, y, size, petals, angle) {
  push();
  translate(x, y);
  rotate(angle);
  noStroke();
  fill(250, 200, 210);

 for (let i = 0; i < petals; i++) {
   ellipse(0, size * 0.5, size * 0.55, size * 0.9);
   rotate(TWO_PI / petals);
 } 
fill(240, 190, 120);
  circle(0, 0, size * 0.35);
  pop();
}
