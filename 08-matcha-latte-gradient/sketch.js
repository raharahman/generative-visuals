let topColour = [245, 238, 220];
let bottomColour = [70, 110, 45];

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  noLoop();
}

function draw() {
  loadPixels();

  for(let y = 0; y < height; y++) {
    // mixing colour
    let r = map(y, 0, height, topColour[0], bottomColour[0]);
    let g = map(y, 0, height, topColour [1], bottomColour[1]);
    let b = map(y, 0, height, topColour[2], bottomColour[2]);

    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      pixels[index] = r;
      pixels[index + 1] = g;
      pixels[index + 2] = b;
      pixels[index + 3] = 255;
    }
  }

 updatePixels();

fill(0)
textFont("Courier New")
textSize(12)
textAlign(CENTER)
text("NAT'CHO MATCHA - LATTE", 120, 30);
  
}