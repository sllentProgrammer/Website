var socialVar = false;
var social;

function socialText() {
  //text
  var social = createButton("projects");
  social.position(300, 50);
  social.style('font-size', '65');
  social.mousePressed(projectsClicked);
  //homeText.mousePressed(home);
  //textFont("LeagueGothic-CondensedRegular");
}

function socialClicked() {
  if(socialVar == false) {
      twitter = createP('twitter: twitter.com/sllentCoder');
      twitter.position(0, 250);
      twitter.style('font-size', '65');
      socialVar = true;
} else {
  twitter.remove();
  socialVar = false;
}
}
