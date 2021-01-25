const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,450);
    engine = Engine.create();
    world = engine.world;

    ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100,y:200});
    ground = new Ground(600,height,1200,20);
    platform = new Ground(390, 295, 300, 10);  
    //layer one
   box1=new Box(300,255)
   box2=new Box(330,255)
   box3=new Box(360,255)
   box4=new Box(390,255)
   box5=new Box(420,255)
   box6=new Box(450,255)
   box7=new Box(480,255)
   //layer two
    box8= new Box (330,235)
    box9=new Box(360,235)
    box10=new Box(390,235)
    box11=new Box(420,235)
    box12=new Box(450,235)
    //layer 3
    box13= new Box(360,195)
    box14=new Box(390,195)
    box15=new Box (420,195)
    //layer 4
    box16= new Box(390,155)

    platform1=new Ground(750,150,300,10);
//layer one
box17= new Box (690,130)
box18=new Box(720,130)
box19=new Box(750,130)
box20=new Box(780,130)
box21=new Box(810,130)
//layer two
box22= new Box(750,110)
box23=new Box(780,110)
box24=new Box(720,110)
//layer one 
box25= new Box(750,90)



   Engine.run(engine);
}

function draw(){
    background(0)
   // Engine.update(engine);
    //strokeWeight(4);\
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    //layer one for platform
    fill("skyblue")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //layer two for platform
    fill("pink")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
//layer three for platform
fill("blue")
box13.display();
box14.display();
box15.display();
//layer four for platform
fill("grey")
box16.display();
//layer three platform1
fill("blue")
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
//layer two and one from platform 1
fill("turquoise")
box22.display();
box23.display();
box24.display();
fill("pink")
box25.display();


    platform.display();
    platform1.display();
    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
  
    slingShot.display();
  }
  function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }


