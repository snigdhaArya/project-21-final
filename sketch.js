var canvas;
var music;
var  block1,block2,block3,block4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
    block1= createSprite(70,580,200,30);
    block1.shapeColor="blue";

    block2= createSprite(295,580,200,30);
    block2.shapeColor="orange";

    block3= createSprite(520,580,200,30);
    block3.shapeColor="red";

    block4= createSprite(750,580,200,30);
    block4.shapeColor="green";

    //create box sprite and give velocity
    ball= createSprite(random(20,750),100,40,40);
    ball.shapeColor="pink"

    ball.velocityX=5;
    ball.velocityY=5;
 

}

function draw() {
    background(0);
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    // ball.bounceOff(block1);
    // ball.bounceOff(block2);
    // ball.bounceOff(block3);
    // ball.bounceOff(block4);
    
    //add condition to check if box touching surface and make it box
//  music.play();
if(block1.isTouching(ball)&& ball.bounceOff(block1)){
    ball.shapeColor="blue";
    music.play();

}
if(block2.isTouching(ball)/*&& ball.bounceOff(block2)*/){
    ball.shapeColor="orange";
    ball.velocityX=0
    music.stop();

}
 if(block3.isTouching(ball)&& ball.bounceOff(block3)){
     ball.shapeColor="red";
     music.play();
 }

if(block4.isTouching(ball)&& ball.bounceOff(block4)){
    ball.shapeColor="green";
    music.play();
}

drawSprites();
}
