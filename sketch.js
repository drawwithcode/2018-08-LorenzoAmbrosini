var speedY = windowHeight/2;
var speedX = windowWidth/2;
function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {


  background(100);

  ballMove();

}

function ballMove(){

  var speedY = map(rotationX, -60, 90, 0, windowHeight);
  var speedX = map(rotationY, -45, 45, 0, windowWidth);
  
  fill('red');
  ellipse(speedX, speedY, 50);



}
