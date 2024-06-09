function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(135, 206, 235); // Sky blue background

  // Road
  fill(50); // Dark gray color for the road
  rect(0, 270, 400, 130);

  // Car body
  fill(0, 255, 0); // Green color
  rect(150, 200, 100, 50);
  
  // Wheels
  fill(0); // Black color
  ellipse(175, 250, 30, 30);
  ellipse(225, 250, 30, 30);
  
  // Windows
  fill(255); // White color
  rect(160, 210, 30, 20);
  rect(210, 210, 30, 20);
  
  // Sun
  fill(255, 204, 0); // Yellow color
  ellipse(50, 50, 80, 80);
  
  // Road markings
  fill(255); // White color
  for (let i = 0; i < 400; i += 40) {
    rect(i, 320, 20, 5);
  }
}