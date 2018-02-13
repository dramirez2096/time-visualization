function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
  function draw() {
      strokeWeight(3);
      noFill();
      ellipse(windowWidth/2, windowHeight/2, 550, 550);

      //yellow - seconds circle
      noStroke();
      fill(255,255,0);
      ellipse(windowWidth/2, windowHeight/2, 100, 100);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }