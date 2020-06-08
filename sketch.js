var database;
var position,position1;
var p = [];



function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);

  var pos = database.ref("pos");
  pos.on("value", readPosition, showError);
}

function draw() {
  background("white");
  mousePressed();
  //mouseReleased();
  strokeWeight(70)
  stroke("black")
  for (var i = 0; i < p.length; i = i + 1) {
    line(p[i][0], p[i][1], p[i][0], p[i][1]);
  }
  drawSprites();

}
function readPosition(data) {
  position = data.val();
  // console.log(position.x);
  mouseX = position.x;
  mouseY = position.y;
}
function showError() {
  console.log("Error in writing to the database");
}

function writePosition(x, y) {
  database.ref("pos").set({
    x: x,
    y: y
  });

}

function mousePressed() {
  writePosition(mouseX, mouseY)
  position1 = [position.x, position.y];
  p.push(position1);
}
function mouseReleased(){
  mouseX = null
  mouseY = null
}
