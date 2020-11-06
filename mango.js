
        class Mango {

            constructor(x,y,r){
            
            var options ={
            
                'isStatic':true,
                'density':1,
                'friction':3
            
            }
            
            this.body = Bodies.circle(x,y,r,options);
            this.d = r;
            this.image = loadImage("mango.png");
            
            World.add(world,this.body);
            
            }
            
            display(){
            
            var pos  = this.body.position;
              imageMode(CENTER);
              image(this.image,pos.x,pos.y,40,40)
            
            }
            
            }