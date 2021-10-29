var path,runner, leftBoundary,rightBoundary;pathImg,runnerImg

function preload(){
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
runner = createSprite(180,340,30,30);
runner.scale=0.08;
runner.addAnimation("JakeRunning",runnerImg);
leftBoundary=createSprite(0,300,100,600);
leftBoundary.visible = false;
rightBoundary=createSprite(390,300,80,600);
rightBoundary.visible = false;
}

function draw() {
  background("black");
  path.velocityY = 4;
 runner.x = World.mouseX;
  if(path.y > 400 ){
    path.y = height/2;
  }
  edges= createEdgeSprites();
  runner.collide(edges[3]);
   runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  drawSprites();
}
