
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300, 150, 250, 20)
	bob = new Bob(200, 450, 50)
	bob.debug = true
	bob2 = new Bob(250, 450, 50)
	bob3 = new Bob(300, 450, 50)
	bob4 = new Bob(350, 450, 50)
	bob5 = new Bob(400, 450, 50)
	bob6 = new Bob(200, 350, 50)

	rope = new Rope(bob.body, {x:200, y:150})
	rope2 = new Rope(bob2.body, {x:250, y:150})
	rope3 = new Rope(bob3.body, {x:300, y:150})
	rope4 = new Rope(bob4.body, {x:350, y:150})
	rope5 = new Rope(bob5.body, {x:400, y:150})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  //drawSprites();
  roof.display()
  bob.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  rope.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob.body, bob.body.position, {x:-50, y: -45})
	}
}



