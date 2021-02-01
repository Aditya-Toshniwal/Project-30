class Box {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          'restitution':0.4,
          'friction':0.0,
         
      }
      this.visibility= 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body.speed);
      if(this.body.speed<2){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
       }
      else {
        World.remove(world,this.body); 
        push();
        this.visibility= this.visibility-5;
        
        pop();
       }
  };
}