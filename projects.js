var projectsVar = false;
var AItext;
var BEARtext
var AIGameD = 0;

function projectsText() {
  //text
  var projects = createButton("projects");
  projects.position(300, 50);
  projects.style('font-size', '65');
  projects.mousePressed(projectsClicked);
  //homeText.mousePressed(home);
  //textFont("LeagueGothic-CondensedRegular");
}

function projectsClicked() {
  if(projectsVar == false) {
      AItext = createButton("AI Game");
      AItext.position(0, 250);
      AItext.style('font-size', '65');
      AItext.mousePressed(AIgame);
      projectsVar = true;
} else {
  AItext.remove();
  projectsVar = false;
}

if(projectsVar == false) {
    BEARtext = createButton("bear Clicker");
    BEARtext.position(0, 350);
    BEARtext.style('font-size', '65');
    BEARtext.mousePressed(BEARgame);
    projectsVar = true;
} else {
AItext.remove();
projectsVar = false;
}
}

function AIgame() {
  //saveJSON(data, 'data.json');
  window.location.href = "http://sllentProgrammer.github.io/AIGame/";
}

function BEARgame() {
  //saveJSON(data, 'data.json');
  window.location.href = "http://sllentProgrammer.github.io/bearClicker/";
}
