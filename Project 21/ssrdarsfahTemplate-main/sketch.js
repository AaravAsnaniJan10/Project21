var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = ("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block1 = createSprite(500,580,200,30);
    block1.shapeColor = "red";

    block2 = createSprite(600,580,100,30);
    block2.shapeColor = "black";

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 2;
    ball.velocityY = 2;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the blocks
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "orange";
        music = false;

        //write code to bounce off ball from the block1 
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "blue";
        music = false;

        //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "blue";
        music = false;

        if(block1.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor = "blue";
            music = false;
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
