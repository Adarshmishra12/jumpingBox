var canvas;
var music;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    block1 = createSprite(750,600,30,80);
    block1.shapeColor="orange";
    block2 = createSprite(650,500,30,80);
    block2.shapeColor="green";
    block3 = createSprite(550,400,30,80);
    block3.shapeColor="pink";
    block4 = createSprite(450,400,30,80);
    block4.shapeColor="blue";




    box = createSprite(random(20,750));
    box.velocityX=4;
    box.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    CreateEdgeSprite();
    
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
    }
   
    if(block2.isTouching(ball)){
        ball.shapeColor=rgb(255,128,0);
        ball.velocityX=0;
        music.stop();
    }
   
  drawSprites();
}
