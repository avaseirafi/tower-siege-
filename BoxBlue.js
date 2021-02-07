class BoxBlue {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility=255;

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

display(){
    var pos = this.body.position;
    strokeWeight(2);
    fill("blue");
   
    if(this.body.speed<3){
      rect(pos.x, pos.y, this.width, this.height)
    }

    else{
      //the opposite of world.add comand
    World.remove(world,this.body);
    //need push and pop so that the other classes dont also reduce visibility
    push();
    //reducing the visibility by 5 each
    this.visibility=this.visibility-5;
    tint(255,this.visibility);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
}
}
}