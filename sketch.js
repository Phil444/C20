var fixedRect, movingRect;
var rect1, rect2

function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100, 50, 80);
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "red"

  rect2 = createSprite(400, 100, 50, 50)
  rect1 = createSprite(400, 800, 80, 30)
  rect1.shapeColor = "green";
  rect2.shapeColor = "cyan";
  rect1.velocityY = -5;
  rect2.velocityY = 5;
  
}

function draw() {
  background(0);


  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2) {
      rect1.velocityX = rect1.velocityX * (-1);
      rect2.velocityX = rect2.velocityX * (-1);
}
if (rect1.y - rect2.y < rect2.height/2 + rect1.height/2
  && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
    rect1.velocityY = rect1.velocityY * (-1);
    rect2.velocityY = rect2.velocityY * (-1);
}

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //25+25=50 RHS
  // variable - 400 LHS

  console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }else {
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
  }

  drawSprites();
}