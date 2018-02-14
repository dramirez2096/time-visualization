var angle = 0;
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

      //yellow - seconds circle
      translate(windowWidth/2, windowHeight/2);
      //rotate(angle);

      fill(255,255,0);
      ellipse(0,0 - 50, 100, 100, 50);

      //blue - minutes circle
      fill(0,201,255,50);
      ellipse(0,0 - 100, 200, 200);
      line(0,0,0,0);


      angle = angle + 5;
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }