function setup() {
  createCanvas(800,400);
 MOVING= createSprite(400, 200, 50, 50);
 FIXED=createSprite(200,100,80,80)
}

function draw() {
  background("yellow");  
  MOVING.x=mouseX;
  MOVING.y=mouseY;

  if(abs(MOVING.x-FIXED.x) <= MOVING.width/2+FIXED.width/2 && 
  abs(MOVING.y-FIXED.y) <= MOVING.height/2+FIXED.height/2){
    FIXED.shapeColor="black"
    MOVING.shapeColor="black"
  }else{
    FIXED.shapeColor="red"
    MOVING.shapeColor="red"
  }
  drawSprites();
}