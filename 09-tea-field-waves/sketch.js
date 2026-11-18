let palette = ["#466e2d", "#6b8f3e", "#8cb45a", "#a9c87a", "#c8dca0"];
let rows = 5;
let points = 40;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(245, 238, 220);
  noStroke();

  fill(240, 190, 120);
  circle(470, 110 + sin(frameCount * 0.02) * 10, 90);

  let wavelength = map(mouseX, 0, width, 50, 400);
  let amplitude = map(mouseY, 0, height, 5, 60);

  for (let r = 0; r < rows; r++) {
    let baseY = 220 + r * 80;
    fill(palette[r]);

  for (let i = 0; i < points; i++) {
    let x = i * (width/ points) + 7;

    let angle = (x / wavelength) * TWO_PI + frameCount * 0.03 + r * 0.8;

    let y = baseY + sin(angle) * amplitude;
    let size = 10 + cos(angle) * 4;
    circle(x, y, size);
  }
  }

fill(0);
  textFont("Courier New");
  textSize(12);
  textAlign(CENTER);
  text("NAT'CHO MATCHA - TEA FIELD WAVES", 150, 30);
}