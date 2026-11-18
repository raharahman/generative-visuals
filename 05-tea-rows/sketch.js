let palette = ["#466e2d", "#f5eedc"]; 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(245, 238, 220);
  noStroke();

for (let i = 0; i < 30; i++) {
  let size = 1400 - i * 45;
  fill(palette[i % palette.length]);
  arc(300, 640, size, size * 0.8, PI, TWO_PI);
}
  //TITLE
  fill(0);
  textFont("Courier New");
  textSize(12);
  textAlign(CENTER)
  text("NAT'CHO MATCHA - TEA ROWS", 120, 30);
}