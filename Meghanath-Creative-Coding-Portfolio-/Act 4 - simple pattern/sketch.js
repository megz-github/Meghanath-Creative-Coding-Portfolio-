function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop(); // Ensures the draw function only runs once
}

function draw() {
  let cols = 10; // Number of columns
  let rows = 10; // Number of rows
  let maxDiameter = width / cols; // Maximum diameter of each circle
  let minDiameter = maxDiameter / 2; // Minimum diameter of each circle

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * maxDiameter + maxDiameter / 2;
      let y = j * maxDiameter + maxDiameter / 2;
      
      // Calculate the size and color based on the position
      let diameter = map(i + j, 0, cols + rows - 2, minDiameter, maxDiameter);
      let colorValue = map(i + j, 0, cols + rows - 2, 0, 255);
      
      fill(colorValue, 100, 255 - colorValue);
      noStroke();
      ellipse(x, y, diameter, diameter);
    }
  }
}
