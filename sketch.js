




function preload(){
background=loadImage("image/iss.png");
sleep=loadAnimation("image/sleep.png");
brush=loadAnimation("image/brush.png");
gym=loadAnimation("image/gym21.png","image/gym22.png");



}






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}







function draw() {
  background(255,255,255);  
  drawSprites();
}