var angle = 0;
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
  }
  
  function draw() {
      background(255);

      strokeWeight(3);
      fill(255);
      ellipse(windowWidth/2, windowHeight/2, 550, 550);

      //yellow - seconds circle
      translate(windowWidth/2, windowHeight/2);
      rotate(angle);

      fill(255,255,0);
      //ellipseMode(CENTER);
      ellipse(windowHeight/27 + 12, windowWidth/27 - 12, 100, 100);
      line(0,0,200,200);

      
      angle = angle + 5;
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }