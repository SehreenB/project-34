const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine,world;


var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;

    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
     
    let options={
       mouse:canvasmouse
     }

     mConstraint=MouseConstraint.create(engine,options);
     World.add(world,mConstraint);

    roof = new Roof(300,100,300,40)

    pendulum1=new Pendulum(200,350,50);
    pendulum2=new Pendulum(250,350,50);
    pendulum3=new Pendulum(300,350,50);
    pendulum4=new Pendulum(350,350,50);
    pendulum5=new Pendulum(400,350,50);
    
    
    sling1=new Sling( pendulum1.body,{x:200 ,y:100})
    sling2=new Sling( pendulum2.body,{x:250 ,y:100})
    sling3=new Sling( pendulum3.body,{x:300 ,y:100})
    sling4=new Sling( pendulum4.body,{x:350 ,y:100})
    sling5=new Sling( pendulum5.body,{x:400 ,y:100})

	  Engine.run(engine);
  
}


function draw() {
  background("pink")
  rectMode(CENTER);
  
  roof.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}
