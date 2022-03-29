
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground
var leftSide
var rightSide
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	
	
	ball_option={
	isStatic: false,
	restitution: 1,
	friction: 0,
	density: 1.2
	}
	rect_option = {
		isStatic: true
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    fill("red")
	ground = Matter.Bodies.rectangle(500,695,1000,15,rect_option)
	
	World.add(world,ground)
	ball = Matter.Bodies.circle(400,350,25,ball_option);
	World.add(world,ball)
	Engine.run(engine);
}


function draw() {
	background(0);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,1000,15)
  ellipse(ball.position.x,ball.position.y,25,25) 
  leftSide = rect(670,680,10,300)
  rightSide = rect(875,680,10,300)
  
  if(keyIsDown(UP_ARROW)){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:5})
}
  Engine.update(engine)
  
 
  drawSprites();
 
}



