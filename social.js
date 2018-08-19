var socialVar = false;
var socialText;

function socialText() {
  //text
  var twitter = createButton("social media");
  twitter.position(700, 50);
  twitter.style('font-size', '65');
  twitter.mousePressed(socialClicked);


}

function socialClicked() {
  if(socialVar == false) {
      socialText = createP('twitter: twitter.com/');
      socialText.position(0, 250);
      socialText.style('font-size', '65');
      socialVar = true;
} else {
  socialText.remove();
  socialVar = false;
}
}
