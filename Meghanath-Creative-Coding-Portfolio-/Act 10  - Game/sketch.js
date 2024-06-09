let basket;
let fruits = [];
let missed = 0;
let score = 0;
let gameOver = false;
let powerUpActive = false;
let powerUpEndTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  basket = new Basket();
  for (let i = 0; i < 5; i++) {
    fruits.push(new Fruit());
  }
}

function draw() {
  background(100, 200, 100);

  if (!gameOver) {
    basket.show();
    basket.move();

    for (let fruit of fruits) {
      fruit.show();
      fruit.update();
      if (basket.catches(fruit)) {
        score += fruit.points;
        if (fruit.type === 'power-up') {
          powerUpActive = true;
          powerUpEndTime = millis() + 5000; // 5 seconds power-up duration
        }
        fruit.reset();
      } else if (fruit.misses()) {
        missed++;
        fruit.reset();
        if (missed >= 10) {
          gameOver = true;
        }
      }
    }

    if (powerUpActive) {
      fill(255, 0, 255);
      textSize(32);
      text(`Power-Up Active!`, width / 2, 40);
      if (millis() > powerUpEndTime) {
        powerUpActive = false;
      }
    }

    fill(255);
    textSize(32);
    text(`Score: ${score}`, 10, 40);
    text(`Missed: ${missed}`, 10, 80);
  } else {
    fill(255, 0, 0);
    textSize(64);
    textAlign(CENTER, CENTER);
    text(`Game Over\nScore: ${score}`, width / 2, height / 2);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    basket.setDir(-1);
  } else if (keyCode === RIGHT_ARROW) {
    basket.setDir(1);
  }
}

function keyReleased() {
  basket.setDir(0);
}

class Basket {
  constructor() {
    this.x = width / 2;
    this.y = height - 50;
    this.size = 100;
    this.xdir = 0;
  }

  show() {
    fill(255, 204, 0);
    noStroke();
    rect(this.x, this.y, this.size, 20);
  }

  setDir(dir) {
    this.xdir = dir;
  }

  move() {
    this.x += this.xdir * 5;
    this.x = constrain(this.x, 0, width - this.size);
  }

  catches(fruit) {
    return fruit.y > this.y && fruit.y < this.y + 20 && fruit.x > this.x && fruit.x < this.x + this.size;
  }
}

class Fruit {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.size = random(20, 40);
    this.speed = powerUpActive ? random(1, 3) : random(2, 5);
    this.type = random(['normal', 'power-up']);
    if (this.type === 'normal') {
      this.color = [random(255), random(255), random(255)];
      this.points = 1;
    } else {
      this.color = [255, 0, 255];
      this.points = 5;
    }
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-500, -50);
    }
  }

  misses() {
    return this.y > height;
  }
}
