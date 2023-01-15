var box ;
function setup() {
  createCanvas(400,400);
  box = createSprite(100,100,50,50);
  box.shapeColor = "red";
}

function draw() 
{
  background(170);

if(keyIsDown(UP_ARROW)){
  box.y = box.y-10
}
if(keyIsDown(DOWN_ARROW)){
box.position.y = box.position.y+10
}
if(keyIsDown(RIGHT_ARROW)){
box.x = box.x+10;
}
if(keyIsDown(LEFT_ARROW)){
box.x = box.x-10
}
  drawSprites();
}




