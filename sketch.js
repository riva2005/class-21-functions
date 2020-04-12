var fixedrect;
var movingrect;
var obj1;
var obj2;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,50,50);
  fixedrect.shapeColor="green";;
  fixedrect.velocityX=5;
movingrect=createSprite(600,200,50,50);
movingrect.shapeColor="green";
movingrect.velocityX=-5
 obj1=createSprite(200,200,50,50);
 obj1.shapeColor="red";
  obj1.velocityX=4;
  obj2=createSprite(500,200,50,50);
  obj2.shapeColor="orange";
   obj2.velocityX=-4;
 
}
;
function draw() {
  background(255,255,255);  
  bounceoff(obj1,obj2);
  if (isTouching(movingrect,fixedrect)){
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  else {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}
