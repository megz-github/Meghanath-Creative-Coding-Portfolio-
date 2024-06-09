let trail = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0); // Dark background to highlight the trail

  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let transparency = map(i, 0, trail.length, 255, 50);
    fill(trail[i].color[0], trail[i].color[1], trail[i].color[2], transparency);
    noStroke();
    if (trail[i].shape === 'circle') {
      ellipse(trail[i].x, trail[i].y, trail[i].size, trail[i].size);
    } else {
      rectMode(CENTER);
      rect(trail[i].x, trail[i].y, trail[i].size, trail[i].size);
    }
  }

  // If mouse is pressed, add a new element to the trail
  if (mouseIsPressed) {
    let color = [random(0, 255), random(0, 255), random(0, 255)];
    let shape = random(['circle', 'square']);
    trail.push({ x: mouseX, y: mouseY, size: random(10, 50), color: color, shape: shape });

    // Limit the trail length
    if (trail.length > 50) {
      trail.splice(0, 1);
    }
  }
}
