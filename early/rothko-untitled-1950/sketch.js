const colours = ["blue", "orange"];

function setup() {
  createCanvas(400, 600);
  frameRate(2);
}

function draw() {
  background("cream");

  fill(colours[frameCount % colours.length]);
  rect(15, 15, 370, 550);

  fill(colours[(frameCount + 1) % colours.length]);
  rect(25, 25, 350, 340);
}

