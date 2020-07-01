var ground, groundSprite;
var dustbinVertical1, dustbinVertical2;
var dustbinHorizontal;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor= ("yellow");

	dustbinVertical1 = new DustbinVertical(540,615);
	dustbinVertical2 = new DustbinVertical(760,615);

	dustbinHorizontal = new DustbinHorizontal(650,655);

	paper = new Paper(50,600);

	Engine.run(engine);
}

function draw() 
{
	rectMode(CENTER);
	background(0);
	
	dustbinVertical1.display();
	dustbinVertical2.display();

	dustbinHorizontal.display();

	paper.display();

	drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25});
	}
}
