class Rope{
    constructor(body1, body2, offsetX, offsetY){
      this.offsetX= offsetX;
      this.offsetY= offsetY;
      var options = {
        bodyA: body1,
        bodyB: body2,
        pointB: {x: this.offsetX, y:this.offsetY}
     }
      this.rope= Constraint.create(options);
      World.add(world,this.rope)
    }
    display(){
      if(this.rope.bodyA){ 
        var pointA= this.rope.bodyA.position; 
        var pointB= this.rope.bodyB.position; 
        var point1x = pointA.x;
        var point1y = pointA.y;
        var point2x = pointB.x+this.offsetX;
        var point2y = pointB.y+this.offsetY;
        strokeWeight(3);
        line(point1x,point1y,point2x,point2y); 
    }
  }
} 