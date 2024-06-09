let circles = [];
let colors = ['#f94144', '#f3722c', '#f8961e', '#f9844a', '#f9c74f', '#90be6d', '#43aa8b', '#577590'];
let backgroundColor = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(backgroundColor);

  // Create a new circle at the mouse position
  let c = {
    x: mouseX,
    y: mouseY,
    size: random(10, 50),
    color: random(colors),
    alpha: 255 // Start fully opaque
  };
  circles.push(c);

  // Draw all circles and apply fading and movement
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    fill(circle.color + hex(circle.alpha, 2)); // Convert alpha to hex for color
    ellipse(circle.x, circle.y, circle.size);
    
    // Update alpha for fade out
    circle.alpha -= 2;
    
    // Apply slight random movement
    circle.x += random(-1, 1);
    circle.y += random(-1, 1);
  }

  // Remove circles that are fully transparent
  circles = circles.filter(circle => circle.alpha > 0);
}

function mousePressed() {
  // Change color palette on mouse press
  colors = colors.map(c => color(random(255), random(255), random(255)).toString('#rrggbb'));
  // Change background color randomly
  backgroundColor = color(random(255), random(255), random(255));
}
