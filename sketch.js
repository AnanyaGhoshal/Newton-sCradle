const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(100,350);
	bob2 = new Bob(110,350);
	bob3 = new Bob(120,350);
	bob4 = new Bob(130,350);
	bob5 = new Bob(140,350);

	roof = new Roof(400,10,800,20);

	var chain1_options={
		bodyA:bob1.body,
		bodyB:roof.body,
		length:280,
		stiffness:1
	}

	chain1 = Constraint.create(chain1_options);
	World.add(world	,chain1);

	var chain2_options={
		bodyA:bob2.body,
		bodyB:roof.body,
		length:280,
		stiffness:1
	}

	chain2 = Constraint.create(chain2_options);
	World.add(world,chain2);

	var chain3_options={
		bodyA:bob3.body,
		bodyB:roof.body,
		length:280,
		stiffness:1
	}

	chain3 = Constraint.create(chain3_options);
	World.add(world,chain3);

	var chain4_options={
		bodyA:bob4.body,
		bodyB:roof.body,
		length:280,
		stiffness:1
	}

	chain4 = Constraint.create(chain4_options);
	World.add(world,chain4);

	var chain5_options={
		bodyA:bob5.body,
		bodyB:roof.body,
		length:280,
		stiffness:1
	}

	chain5 = Constraint.create(chain5_options);
	World.add(world,chain5);



	
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  Engine.update(engine);

  keyPressed();
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  line(roof.body.position.x,roof.body.position.y,bob1.body.position.x,bob1.body.position.y);
  line(roof.body.position.x,roof.body.position.y,bob2.body.position.x,bob2.body.position.y);
  line(roof.body.position.x,roof.body.position.y,bob3.body.position.x,bob3.body.position.y);
  line(roof.body.position.x,roof.body.position.y,bob4.body.position.x,bob4.body.position.y);
  line(roof.body.position.x,roof.body.position.y,bob5.body.position.x,bob5.body.position.y);

  

 
}

function keyPressed(){

	if(keyCode===LEFT_ARROW){

		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-30,y:-155});
	}
}


