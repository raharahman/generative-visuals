let palette = ["#466e2d", "#8cb45a", "#c8dca"];
let spacing = 40;
let columns = 15;
let rows = 15;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(245, 238, 220);
  noStroke();

for (let i = 0; i < columns; i++) {
  for (let j = 0; j < rows; j++) {
    let x = i * spacing + spacing / 2;
    let y = j * spacing + spacing / 2;

    //how far the dot is from mouse
    let d = dist(mouseX, mouseY, x, y);

    //when close to dot = big dot, far away = small dot
    let size = map(d, 0, 250, spacing, 6, true);

    fill(palette[(i + j) % palette.length]); // coloured diagonal stripes
    circle(x,y, size);
  }
}
  //title
  fill(0);
  textFont("Courier New");
  textSize(12);
  textAlign(CENTER);
  text("NAT'CHO MATCHA - WALKING THROUGH THE MATCHA FIELD", 190, 30);
}