const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundimage
var tower, towerImage;
var canon;
var canonImage, canonBase;

function preload() {
 backgroundimage = loadImage("./assets/background.gif");
 towerImage = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower= Bodies.rectangle(80,200,160,310,options);
 World.add(world,tower);

 canon = new Canon(175,120,130,100,50);
}

function draw() {
  image(backgroundimage, 0, 0, 1200, 600);
  Engine.update(engine);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  rect(ground.position.x, ground.position.y,width*2,1);
  
   canon.display();
}
