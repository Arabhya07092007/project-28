    const Engine=Matter.Engine;
    const World=Matter.World;
    const Bodies=Matter.Bodies;
    const Constraint = Matter.Constraint;

    var engine,world;
    var stone;
    var bottom;
    var tree,treeImg,mango1,mango2,mango3,mango4,mango5,mango6;
    var boy ,boyImg;
    var mango7,mango8;
    var rope ;
    var rope2;

    var gameState = "onsling";
    function preload() {
        treeImg = loadImage("tree.png");
        boyImg = loadImage("boy.png")}
    function setup(){
        createCanvas(1200,550);
        engine=Engine.create();
        world=engine.world;

        tree  = createSprite(1000,300,10,10);
        tree.addImage(treeImg);
        tree.scale = 0.4;

        stone=new Rock(130,375);
        bottom = new Ground(600,540,1200,20);

        boy = createSprite(200,450,20,20);
        boy.addImage(boyImg);
        boy.scale  = 0.14;

        rope = new SlingShot(stone.body,{x:130,y:375});
    
        mango1  =new Mango(200,320,5);
        mango2 = new Mango(1100,140,5);
        mango3 = new Mango(1000,160,5);
        mango4 = new Mango(1090,230,5);
        mango5 = new Mango(900,200,5);
        mango6 = new Mango(970,250,5);
        mango7 = new Mango(810,230,5);
        mango8 = new Mango(960,120,5);
    }

    function draw(){
        background("skyblue");
        Engine.update(engine);
        drawSprites();

        stone.display();
        bottom.display();
        mango1.display();
        mango2.display();
        mango3.display();
        mango4.display();
        mango5.display();
        mango6.display();
        mango7.display();
        mango8.display();
        rope.display();
        keyPressed();

        detect(stone,mango1);
        detect(stone,mango2);
        detect(stone,mango3);
        detect(stone,mango4);
        detect(stone,mango5);
        detect(stone,mango6);
        detect(stone,mango7);
        detect(stone,mango8);
        detect(stone,mango1);

        Matter.Body.setStatic(bottom.body,true);   
    }

    function mouseDragged(){
        if (gameState!=="launched"){
            Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
        }}

    function mouseReleased(){

        gameState = "launched";
        rope.fly();
        Matter.Body.setStatic(stone.body,false);
    }

    function keyPressed(){
        if(keyCode === 32){
            Matter.Body.setPosition(stone.body,{x:130,y:375});
            slingshot.attach(stone.body);
        }
    }

