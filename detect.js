function detect(lstone,lmango){
    
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.body.r+lstone.body.r){
        textSize(20);
        text("it's done",200,200)
        console.log("ttouced");
        Matter.Body.setStatic(lmango.body,false);
    }
}