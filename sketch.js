var angle = 0;
var sec = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
  }
  
  function draw() {
      background(255);

      //master circle
      strokeWeight(3);
      fill(255);
      ellipse(windowWidth/2, windowHeight/2, 550, 550);

      translate(windowWidth/2, windowHeight/2);
      rotate(angle);

      strokeWeight(0);
      //yellow - seconds circle
      fill(255,255,0,100);
      ellipse(0,0 - 50, 100, 100, 50);

      //blue - minutes circle
      fill(0,201,255,100,);
      ellipse(0,0 - 100, 200, 200);
      
      //red - hours circle
      fill(255,0,0,100)
      ellipse(0,0 - 137, 275, 275)

      line(0,0,0,0);
      
      angle = angle;
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }