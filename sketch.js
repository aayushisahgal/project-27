
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobOb1, bobOb2, bobOb3, bobOb4, bobOb5;
var roof;
var rope1,rope2,rope3,rope4,rope5;


function setup () {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobOb1=new Bob(300,400);
	bobOb2=new Bob(350,400);
	bobOb3=new Bob(400,400);
	bobOb4=new Bob(450,400);
	bobOb5=new Bob(500,400);

	roof= new  Roof(400,170,300,25);

	rope1 = new Rope(bobOb1.body,roof.body,-100,0);
	World.add(world,rope1);

	rope2 = new Rope(bobOb2.body,roof.body,-50,0);
	World.add(world,rope2);

	rope3 = new Rope(bobOb3.body,roof.body,0,0);
	World.add(world,rope3);

	rope4 = new Rope(bobOb4.body,roof.body,+50,0);
	World.add(world,rope4);

	rope5 = new Rope(bobOb5.body,roof.body,+100,0);
	World.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('pink');
  Engine.update(engine);

  roof.display();

  bobOb1.display();
  bobOb2.display();
  bobOb3.display();
  bobOb4.display();
  bobOb5.display();

  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

   //KeyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobOb1.body,bobOb1.body.position,{x:-730,y:0});
	}
}



