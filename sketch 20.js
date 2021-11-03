var cat
var mouse 
var bgImg
function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    catImg1 = loadImage("cat1.png")
    mouseImg1 = loadImage ("mouse1.png")
    catImg2 = loadImage("cat2.png","cat3.png")
    mouseImg2 = loadImage ("mouse2.png","mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,700,10,10);
    cat.addImage(catImg1)

    mouse = createSprite(900,700,10,10);
    mouse.addImage(mouseImg1)
}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide

   
    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay = 25;
  }
 }

