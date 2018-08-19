//244, 161, 66

var bearStroke;
var bool = false;

var cookies = 0;

function show() {
  if(bool == false) {
    fill(244, 161, 66);
    noStroke();
    ellipse(width/2, height/2, 200, 200);
} else {
  fill(244, 161, 66);
  stroke(255);
  ellipse(width/2, height/2, 200, 200);
}

  fill(244, 161, 66);
  noStroke();
  textSize(32);
  text("click me!", width/2 - 70, height/2 - 130);

  fill(255);
  var cookiestext = ("cookies: " + cookies);
  noStroke();
  textSize(32);
  text(cookiestext, width/2 - 180, height/2 - 395);

  noStroke();
  fill(0);
  var button = createButton("Save cookies!");
  button.position(width/2 - 400, height/2 - 420);
  button.size(200, 50);
  //button.mousePressed(saveData);
  }

function saveData() {
  //saveJSON(data);
}
