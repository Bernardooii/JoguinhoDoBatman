class Drops {
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution: 0.1
        }
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain);
    } 
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
}
   
