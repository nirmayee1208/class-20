var f1,m1


function setup() {

  createCanvas(800,400);
  f1 = createSprite(400, 200, 50, 50);
  f1.shapeColor = "gray";
  m1 = createSprite(600, 200, 80, 30);
  m1.shapeColor = "gray"
}

function draw() {
  background(255,255,255); 
  m1.x=World.mouseX;
  m1.y=World.mouseY;
 if(m1.x - f1.x<f1.width/2+m1.width/2 && f1.x -m1.x <f1.width/2+m1.width/2 &&
  m1.y - f1.y<f1.height/2+m1.height/2 && f1.y - m1.y<f1.height/2+m1.height/2){
   m1.shapeColor = "lavender"
   f1.shapeColor  ="pink"
 }
 else {
   m1.shapeColor = "gray"
   f1.shapeColor = "gray"
 }
 
 
  drawSprites();
}