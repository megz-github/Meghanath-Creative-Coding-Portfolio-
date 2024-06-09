let mySound, fft;
let gradientStart, gradientEnd;

function preload() {
  mySound = loadSound('utomp3.com - Iphone 15 Ringtone.mp3');
}

function setup() {
  createCanvas(400, 400);
  fft = new p5.FFT();
  mySound.setVolume(0.5);
  mySound.play();
  mySound.loop();
  gradientStart = color(0, 0, 255);
  gradientEnd = color(255, 0, 0);
}

function draw() {
  setGradient(0, 0, width, height, gradientStart, gradientEnd, 1);

  let spectrum = fft.analyze();
  noStroke();
  fill(0, 255, 0);
  
  // Draw spectrum as vertical bars with a color gradient
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(map(i, 0, spectrum.length, 0, 255), 255, 255 - map(i, 0, spectrum.length, 0, 255));
    rect(x, height - h, width / spectrum.length, h);
  }

  let waveform = fft.waveform();
  noFill();
  stroke(255);
  strokeWeight(2);
  
  // Draw waveform as a continuous line
  beginShape();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
  
  // Draw ellipse based on average amplitude
  let avgAmplitude = 0;
  for (let i = 0; i < waveform.length; i++) {
    avgAmplitude += abs(waveform[i]);
  }
  avgAmplitude = avgAmplitude / waveform.length;

  fill(255, 0, 0, 150);
  noStroke();
  ellipse(width / 2, height / 2, avgAmplitude * 500, avgAmplitude * 500);

  // Update gradient colors over time
  gradientStart = color((frameCount * 0.5) % 255, 0, 255);
  gradientEnd = color(255, 0, (frameCount * 0.5) % 255);
}

// Function to create gradient background
function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === 1) { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === 2) { // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
