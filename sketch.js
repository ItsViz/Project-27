
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, bobDiamter; 
var rope1, rope2, rope3, rope4, rope5;

function preload(){
}

function setup() {
 createCanvas(800, 700);
 engine = Engine.create();
 world = engine.world;
 roof= new Roof(360,100,300,25);
 bobObject1= new Bob(240,330,30);
 bobObject2= new Bob(300,330,30);
 bobObject3= new Bob(360,330,30);
 bobObject4= new Bob(420,330,30);
 bobObject5= new Bob(480,330,30);
 rope1= new Rope(bobObject1.body,roof.body,-60*2,0);
 rope2= new Rope(bobObject2.body,roof.body,-30*2,0);
 rope3= new Rope(bobObject3.body,roof.body,0*2,0);
 rope4= new Rope(bobObject4.body,roof.body,30*2,0);
 rope5= new Rope(bobObject5.body,roof.body,60*2,0)
 Engine.run(engine);
}


function draw(){
  background("silver");
  Engine.update(engine);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
  if(keyCode == 32){
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-120,y:40})
  }
}



