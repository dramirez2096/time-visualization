var angle = 0;
var angleTwo = 0;
var angleThree = 0;

var minRotate 
var hourRotate;
var minInterval = 59000;
var hourInterval = minInterval*60;
var timer = 0;
var startMin;

var sec = map(second(), 0, 60, 0, 360 );

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    timer = millis();
    startMin = map(minute(), 0, 59, 0, 360);
  }
  
  function draw() {
      background(255);

      angle = angle + 5;
      angleTwo = angleTwo + 3;
      angleThree = angleThree + 1;

      //master circle
      strokeWeight(3);
      fill(255);
      ellipse(windowWidth/2, windowHeight/2, 550, 550);

      translate(windowWidth/2, windowHeight/2);

      minRotate = map(timer - millis(), 0, minInterval, 360, 0);

      if (millis() >= timer) { // reset timer when the millis() catch up
        timer = floor(millis() + hourInterval); // floor() rounds a number down, so we always start on the beat (i.e. 2000, 3000, etc...)
      }

      push();
      rotate(minRotate);

      strokeWeight(0);
      //yellow - seconds circle
      fill(255,255,0,100);
      ellipse(0,0 - 50, 100, 100, 50);
      pop();

      push();
      rotate(hourRotate);
      //blue - minutes circle
      strokeWeight(0);
      fill(0,201,255,100,);
      ellipse(0,0 - 100, 200, 200);
      pop();
      
      push();
      rotate(angleThree);
      //red - hours circle
      strokeWeight(0);
      fill(255,0,0,100)
      ellipse(0,0 - 137, 275, 275)
      pop();

      line(0,0,0,0);
      
      //console.log(second());
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }