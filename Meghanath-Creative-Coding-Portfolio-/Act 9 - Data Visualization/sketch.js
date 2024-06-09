let data = [
  { "month": "January", "temperature": 5 },
  { "month": "February", "temperature": 6 },
  { "month": "March", "temperature": 10 },
  { "month": "April", "temperature": 15 },
  { "month": "May", "temperature": 20 },
  { "month": "June", "temperature": 25 },
  { "month": "July", "temperature": 30 },
  { "month": "August", "temperature": 29 },
  { "month": "September", "temperature": 24 },
  { "month": "October", "temperature": 18 },
  { "month": "November", "temperature": 10 },
  { "month": "December", "temperature": 5 }
];

function setup() {
  createCanvas(800, 400);
  background(255);
  textSize(12);
  noLoop(); // Ensure draw is called only once
}

function draw() {
  background(255);
  drawGraph();
}

function drawGraph() {
  // Draw axes
  stroke(0);
  line(50, 350, 750, 350); // X-axis
  line(50, 50, 50, 350);   // Y-axis

  // Draw labels for months
  for (let i = 0; i < data.length; i++) {
    let x = map(i, 0, data.length - 1, 50, 750);
    fill(0);
    textAlign(CENTER);
    text(data[i].month, x, 370);
  }

  // Draw temperature data as a line graph
  noFill();
  stroke(0, 0, 255);
  beginShape();
  for (let i = 0; i < data.length; i++) {
    let x = map(i, 0, data.length - 1, 50, 750);
    let y = map(data[i].temperature, 0, 35, 350, 50);
    vertex(x, y);
    fill(0);
    ellipse(x, y, 5, 5); // Draw points on the graph
  }
  endShape();

  // Draw labels for temperature
  for (let i = 0; i <= 35; i += 5) {
    let y = map(i, 0, 35, 350, 50);
    fill(0);
    textAlign(RIGHT);
    text(i + '°C', 40, y);
    stroke(200);
    line(50, y, 750, y); // Horizontal grid lines
  }
}
