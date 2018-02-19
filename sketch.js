var secRotate 
var minRotate;
var hourRotate;

var secInterval = 59000;
var minInterval = secInterval*60;
var hourInterval = minInterval*12;

var timer = 0;

var startSec;
var startMin;
var startHour;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    timer = millis();

    startSec = map(second(), 0, 59, 0, 360);
    startMin = map(minute(), 0, 59, 0, 360);
    startHour = map(hour(), 0, 12, 0, 360);
  }
  
  function draw() {
      background(255);

      secRotate = map(timer - millis(), 0, secInterval, 360, 0);
      minRotate = map(timer - millis(), 0, minInterval, 360, 0);
      hourRotate = map(timer - millis(), 0, hourInterval, 360, 0);

      //master circle
      strokeWeight(3);
      fill(255);
      ellipse(windowWidth/2, windowHeight/2, 550, 550);

      translate(windowWidth/2, windowHeight/2);

      if (millis() >= timer) { // reset timer when the millis() catch up
        timer = floor(millis() + hourInterval); // floor() rounds a number down, so we always start on the beat (i.e. 2000, 3000, etc...)
      }

      push(); //yellow - seconds circle
      rotate(startSec); //rotates circle to current second
      rotate(secRotate); //rotates circle every second
    
      strokeWeight(0);
      fill(255,255,0,100);
      ellipse(0,0 - 50, 100, 100, 50);
      pop();

      push(); //blue - minutes circle
      rotate(startMin); //rotates circle to current minute
      rotate(minRotate); 

      strokeWeight(0);
      fill(0,201,255,100,);
      ellipse(0,0 - 100, 200, 200);
      pop();
      
      push(); //red - hours circle
      rotate(startHour);
      rotate(hourRotate);

      strokeWeight(0);
      fill(255,0,0,100)
      ellipse(0,0 - 137, 275, 275)
      pop();

      line(0,0,0,0);

      //console.log(startHour);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }