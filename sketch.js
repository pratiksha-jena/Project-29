const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;
var polygon,polygonImage,slingshot; 

function preload(){
    polygonImage=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon); 

    slingshot = new SlingShot(this.polygon,{x:100,y:200});

    ground = new Ground(500,490,1000,20);

    ground1 = new Ground(420,400,250,10);
    ground2 = new Ground(690,200,190,10);

    block1 = new Box(330,375,30,40);
    block2 = new Box(360,375,30,40);
    block3 = new Box(390,375,30,40);
    block4 = new Box(420,375,30,40);
    block5 = new Box(450,375,30,40);
    block6 = new Box(480,375,30,40);
    block7 = new Box(510,375,30,40);

    block8 = new Box(360,335,30,40);
    block9 = new Box(390,335,30,40);
    block10 = new Box(420,335,30,40);
    block11 = new Box(450,335,30,40);
    block12 = new Box(480,335,30,40);

    block13 = new Box(390,295,30,40);
    block14 = new Box(420,295,30,40);
    block15 = new Box(450,295,30,40);

    block16 = new Box(420,255,30,40);

    block17 = new Box(630,175,30,40);
    block18 = new Box(660,175,30,40);
    block19 = new Box(690,175,30,40);
    block20 = new Box(720,175,30,40);
    block21 = new Box(750,175,30,40);

    block22 = new Box(660,135,30,40);
    block23 = new Box(690,135,30,40);
    block24 = new Box(720,135,30,40);

    block25 = new Box(690,95,30,40);



    
    
}

 function draw(){
     background("black");

     imageMode(CENTER)
     image(polygonImage,polygon.position.x,polygon.position.y,40,40);
     
     ground.display();

     ground1.display();
     ground2.display();

     slingshot.display();

     fill("blue")
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     
     fill("pink")
     block8.display();
     block9.display();
     block10.display();
     block11.display();
     block12.display();

     fill("teal")
     block13.display();
     block14.display();
     block15.display();

     fill("lightblue")
     block16.display();

     fill("blue")
     block17.display();
     block18.display();
     block19.display();
     block20.display();
     block21.display();

     fill("teal")
     block22.display();
     block23.display();
     block24.display();

     fill("pink")
     block25.display();




 }

 function mouseDragged(){
     Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.polygon,{x:100,y:200});
       slingshot.attach(this.polygon);
    }
}
