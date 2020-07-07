const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , stone, blst, launchdeathcount, score, backgroundImg

var bg = "b2.jpg";
function preload() {
  getBackgroundImg();
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  var canvasx = 1600
  var canvasy = 800
  score = 0
  blst = 1
  launchcount = 0
  createCanvas(canvasx,canvasy);
  ground = new Ground(canvasx/2, canvasy-20, width,40,"brown")
  platform = new Ground(canvasx/3 * 2, canvasy/4 *3, canvasx/4 ,20, "gray")
  stone = new Stone(200, 60)
  cannon = new SlingShot(stone.body, {x: 200, y: 50})
  block1 = new Block(890,560,50,60,0,"blue")
  block2 = new Block(940,560,50,60,0,"blue")
  block3 = new Block(990,560,50,60,0,"blue")
  block4 = new Block(1040,560,50,60,0,"blue")
  block5 = new Block(1090,560,50,60,0,"blue")
  block6 = new Block(1140,560,50,60,0,"blue")
  block7 = new Block(1190,560,50,60,0,"blue")
  block8 = new Block(1240,560,50,60,0,"blue")
  
  block11 = new Block(940,500,50,60,0, "red")
  block12 = new Block(990,500,50,60,0, "red")
  block13 = new Block(1040,500,50,60,0,"red")
  block14 = new Block(1090,500,50,60,0,"red")
  block15 = new Block(1140,500,50,60,0,"red")
  block16 = new Block(1190,500,50,60,0,"red")
  
  
  block21 = new Block(990, 440,50,60,0,"blue")
  block22 = new Block(1040,440,50,60,0,"blue")
  block23 = new Block(1090,440,50,60,0,"blue")
  block24 = new Block(1140,440,50,60,0,"blue")
   
  block31 = new Block(1040,380,50,60,0,"orange")
  block32 = new Block(1090,380,50,60,0,"orange")
  
  gameState = "static"
}
function draw() {
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine);

  ground.display();
  platform.display();
  stone.display();
  cannon.display();
  text("Xpos: "+mouseX +"yPos: "+ mouseY,500,40);
  textSize(16);
  text("Launches: "+ launchcount, 300, 200)
  text("Score: " +score, 300, 300  )
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  
  block31.display();
  block32.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  
  block31.score();
  block32.score();

  //console.log(blst)
  if(blst< 100){
  blst = blst + 1
  //console.log(block1.body.velocity)
  }
}
function mouseDragged(){
  //if (gameState==="static"){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
   //}
}


function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(stone.body, {x: 200, y: 50})
     if(stone.body.position.x === 200)
     cannon.attach(stone.body);
     gameState = "static"
  }
}

function mouseReleased(){
  cannon.fly();
  launchcount = launchcount + 1
  gameState = "launched";
}
function blockstatic(){

  if(blst< 99){

  }
}
async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg2.jpg";
  }
  else{
      bg = "b1.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
