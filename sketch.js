
var cat
var catWalk;
var catImg;
var mouse;
var mouseImg;
var mouseTease;
var garden; 
var gardenImg;
function preload() {
    //load the images here
    catImg = loadAnimation("cat1.png");
    catWalk = loadAnimation("cat2.png", "cat3.png");
    mouseImg = loadAnimation("mouse1.png");
    mouseTease = loadAnimation("mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(200,200,15,15);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
// I PUT IN THE CODE CORRECTLY AND IT REFUSES TO LOAD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!