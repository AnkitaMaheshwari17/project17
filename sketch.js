var fixedRect, movingRect;
var o1,o2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1= createSprite(200,400,30,30);
  o1.shapeColor = "blue";
  o1.debug=true;
  o2=createSprite(100,200,30,30);
  o2.shapeColor="blue";
  o2.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,o1)){
  movingRect.shapeColor = "red";
  o1.shapeColor = "red";
  }
  else{
  movingRect.shapeColor = "green";
  o1.shapeColor = "green";
  }
  drawSprites();
}

