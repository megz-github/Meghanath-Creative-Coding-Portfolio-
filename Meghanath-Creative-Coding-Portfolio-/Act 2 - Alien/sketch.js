function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30, 30, 60); // Dark blue background
  
  // Body
  fill(0, 255, 128); // Bright green color
  ellipse(200, 220, 120, 160);
  
  // Head
  fill(0, 204, 255); // Cyan color
  ellipse(200, 120, 80, 100);
  
  // Eyes
  fill(255);
  ellipse(180, 110, 20, 20);
  ellipse(220, 110, 20, 20);
  
  // Pupils
  fill(0);
  ellipse(180, 110, 10, 10);
  ellipse(220, 110, 10, 10);
  
  // Antennas
  stroke(0, 255, 128);
  strokeWeight(4);
  line(190, 70, 160, 30);
  line(210, 70, 240, 30);
  ellipse(160, 30, 10, 10);
  ellipse(240, 30, 10, 10);
  
  // Mouth
  noFill();
  stroke(255, 0, 0);
  arc(200, 150, 40, 20, 0, PI);
  
  // Arms
  stroke(0, 255, 128);
  strokeWeight(8);
  line(140, 250, 100, 300);
  line(260, 250, 300, 300);
  
  // Legs
  line(180, 300, 160, 350);
  line(220, 300, 240, 350);
}
