
function setup() {
  createCanvas(1584, 396);
}

function draw() {
  background("#061D17");

  let x = 0;
  let panel = 0;

  while (x < width) {
    let panelWidth = 11 + (panel % 4) * 2;
    let direction = panel % 2;
    let variation = sin(panel * 1.7) * 0.025;

    for (let y = 0; y < height; y += 2) {
      let t = y / height;

      // Alternate the light direction on every panel
      let gradient = direction === 0 ? t : 1 - t;
      gradient = constrain(gradient + variation, 0, 1);

      // Soft, architectural light falloff
      let light = pow(gradient, 1.35);

      // Restrained dark-jade glass tones
      let r = lerp(5, 25, light);
      let g = lerp(29, 67, light);
      let b = lerp(22, 48, light);

      fill(r, g, b);
      noStroke();
      rect(x, y, panelWidth, 2);
    }

    // Deep shadow along the glass edge
    fill(1, 10, 8, 150);
    rect(x, 0, 2, height);

    // Muted glass reflection
    fill(145, 178, 151, 22);
    rect(x + panelWidth * 0.72, 0, 1, height);

    // Subtle inner refraction
    fill(65, 105, 82, 28);
    rect(x + panelWidth * 0.4, 0, 2, height);

    // Fine dark separation between panels
    fill(0, 8, 6, 65);
    rect(x + panelWidth - 1, 0, 1, height);

    x += panelWidth;
    panel++;
  }

  // Very subtle atmospheric movement
  noStroke();
  let atmosphere = sin(frameCount * 0.008) * 3;
  fill(105, 140, 112, 5);
  rect(0, 0, width, height + atmosphere);
}
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('linkedin-banner', 'png');
  }
}