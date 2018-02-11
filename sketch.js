function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  }
  
  function draw() {
      strokeWeight(3);
      ellipse(windowWidth/2, windowHeight/2, 550, 550);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }