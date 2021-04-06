var bgImg ;
var cat , mouse ;
var catImg1 , mouseImg1 , catImg2 ,  mouseImg2 , catImg3 , catImg4 , mouseImg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png" );
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg2 = loadAnimation("images/mouse3.png","images/mouse2.png");
    mouseImg3 = loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(975,705);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("sleeping",catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("standing",mouseImg1);
    mouse.scale = 0.15;
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("standing",catImg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("standing");
        mouse.addAnimation("sleeping",mouseImg3);
        mouse.scale = 0.15;
        mouse.changeAnimation("sleeping");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("running",catImg2);
      cat.changeAnimation("running");

      mouse.addAnimation("teasing",mouseImg2);
      mouse.changeAnimation("teasing");


  }


}
