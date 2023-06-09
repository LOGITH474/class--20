
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(800,800);
  engine=Engine.create()
  world=engine.world

  var ball_options={
    restitution:0.95,
    frictionAir:0.01
  }
  ball=Bodies.circle(100,10,20,ball_options)
  World.add(world,ball)

  ball2=Bodies.circle(200,10,50,ball_options)
  World.add(world,ball2)

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground)

  var rock_options={
    restitution:0.85
  }

  rock=Bodies.circle(370,20,10,rock_options)
  World.add(world,rock)

  wall=Bodies.rectangle(300,200,200,20,ground_options)
  World.add(world,wall)
}

function draw() 
{
  background(51);
 Engine.update(engine)
 ellipse(ball.position.x,ball.position.y,20)
 rect(ground.position.x,ground.position.y,400,20)
 ellipse(rock.position.x,rock.position.y,10)
 rect(wall.position.x,wall.position.y,200,20)
 ellipse(ball2.position.x,ball2.position.y,50)
}

