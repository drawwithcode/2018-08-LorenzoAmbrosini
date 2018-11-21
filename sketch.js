var field;
var ball;
var basket;

var balls = [];


var speedY;
var speedX;

function preload() {
  field = loadImage("assets/Court.png");
  ballImage = loadImage("assets/Ball.png");
  basket = loadImage("assets/Case.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(field);


  var myBall = new Ball(random(width - 50), random(height - 50));

  balls.push(myBall);

}

function draw() {
  var speedY = windowHeight / 2;
  var speedX = windowWidth / 2;

  background(field);

  speedY = map(rotationX, -45, 45, 0, windowHeight);
  speedX = map(rotationY, -23, 23, 0, windowWidth - 60);

  fill('red');
  image(basket, speedX, speedY, 60, 70);


  for (var j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
  }
}

function Ball(_x, _y) {

  this.x = _x;
  this.y = _y;
  this.speed = 4;

  bsX = map(rotationY, -23, 23, 0, windowWidth - 60);
  bsY = map(rotationX, -45, 45, 0, windowHeight);;

  console.log(bsY);

  this.yDir = 1;
  this.xDir = 1;
  // Methods
  this.move = function() {
    this.x += this.speed * this.xDir;
    this.y += this.speed * this.yDir;

    if (this.y >= height - 40 || this.y <= 0) {
      // if 1, set to -1, if -1, set to 1
      this.yDir *= -1;
    }

    if (this.x >= width - 40 || this.x <= 0) {
      this.xDir *= -1;
    }

    if (this.x <= bsX + 30 && this.y <= bsY + 35 && this.x >= bsX - 30 && this.y >= bsY - 35) {

      this.x = random(0, width);
      this.y = random(0, height);

    }
  }

  this.display = function() {
    image(ballImage, this.x, this.y, 40, 40);
  }
}
