var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music.loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(150,580,360,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(300,580,360,300);
    block3.shapeColor = "purple"

    block4 = createSprite(450,580,360,30);
    block4.shapeColor = "yellow";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 3;
    ball.velocityY = 2;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(isTouching(block1,ball) && ball.bounceOff(block1,ball)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(isTouching(block2,ball)) {
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
       ball.setvelocityX = 0;
       ball.setVelocityy = 0;
        //write code to stop music
        music.stop();
    }


    //write code to bounce off ball from the block3
    if(isTouching(block3,ball)){
        bounceOff(block3,ball);
    }


    //write code to bounce off ball from the block4

    if(isTouching(block4,ball)){
        bounceOff(block4,ball);
    }

    drawSprites();
}

function isTouching(object1,object2)
    if(object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object1.height/2 + object2.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2){

            return true;
        }
        else{
            return false;
        }




function bounceOff(object1, object2){
if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    } 

if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object1.height/2 + object2.height/2){
        object1.velocityY = object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
}
