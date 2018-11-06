var mic;
var capture;

var x_pos;
var y_pos;

var circle = [];
var count = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  mic = new p5.AudioIn();
  mic.start();

  noStroke();
  x_pos = 0;
  y_pos = 0.1;

}

function draw() {

  clear();
  background(255);

	x_pos += y_pos;

  var vol = mic.getLevel();

  for(i = 0; i <= width; i+=20) {

      noStroke();

      fill(((100*x_pos)*(0.000001/vol)+i)%360, 0, 0);

      a = 60*sin((1*x_pos)+(i/50))*(vol*500);

  	  rect(i, 20+(height/2)-50-(a/2), 6, 120+a);

  }

  var myImage = capture.loadPixels();

  fill(83, 49, 24);
  textFont('Special Elite');
  textSize(35);
  textAlign(CENTER);
  text('Make some noise or just whisper something to your PC', width/2, height/9);

  push();
  imageMode(CENTER);
  translate(width/2, height/2);
  image(myImage, 0, 20, 640, 500);
  filter('INVERT');
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
