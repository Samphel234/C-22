const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,obj1;
var obj2
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world=engine.world;
  var opt1= {
    isStatic:true
  }
  obj1 = Bodies.rectangle(0,390,800,5,opt1);
  World.add(world,obj1);
  
  console.log(obj1);

  var opt2={
    restitution:1
  }

obj2= Bodies.rectangle(200,100,70,70,opt2)
World.add(world,obj2);
 
}

function draw() {
  background("cyan");
  Engine.update(engine);
  rect(obj1.position.x,obj1.position.y,800,50)
  rect(obj2.position.x,obj2.position.y,60,60)
}