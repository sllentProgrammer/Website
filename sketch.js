

function setup() {
  createCanvas(windowHeight, windowWidth);
}

function draw() {
  background(51);
  show();
}

function windowResized() {
  resizeCanvas(windowHeight, windowWidth);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, width/2, height/2);

  if(d < 150) {
  if(bool == false) {
    bool = true;
    cookies = cookies + 1;
  } else {
    bool = false;
    cookies = cookies + 1;    
  }
    console.log("pressed");
  }
}
