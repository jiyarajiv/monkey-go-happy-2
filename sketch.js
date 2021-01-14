
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
    monkey=createSprite(50,440,25,25);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(300,500,800,20)
  ground.shapeColor="green";
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
  score=0;
  
  
}

function draw() {
  background("lightblue");
  monkey.collide(ground);
  
    
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY =-10 ;
    }

  if(ground.x<200) {
     ground.x=ground.width/2
  }
  spawnBanana();
  spawnObstacles();
    
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+1;
  }
  
  
  drawSprites();
  fill("white");
  textSize(20)
  text("score:"+score,400,20);
  
  
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  textSize(20);
  text("Survival Time:"+survivalTime,5,20);
  
}
function spawnBanana(){
  if(frameCount%160===0){
   banana=createSprite(600,100,40,10);
   banana.y=Math.round(random(250,300));
    banana.addImage(bananaImage);
    banana.scale=0.2;
    banana.velocityX=-3;
    
    monkey.lifetime=500;
    
    banana.depth=monkey.depth
    monkey.depth=monkey.depth+1
    
    bananaGroup.add(banana)
    
}
  
}
function spawnObstacles(){
  if(frameCount%150===0){
    var obstacle=createSprite(500,450,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-6;
  
    var rand=Math.round(random(1));
    switch(rand){
       case 1: obstacle.addImage(obstacleImage);
        break;
      default: break;
        
    }
    
    obstacle.scale=0.25;
    obstacle.lifetime=500;
  obstaclesGroup.add(obstacle);
  }
  
}








