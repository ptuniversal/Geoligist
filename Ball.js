class Ball{
    constructor(x,y){
        var options = {
            'density':3,
            'friction': 0.1,
            'restitution':0.5  
    }

    this.body=this.Bodies.ellipse(x,y,radius,options);
    this.x=x;
    this.y=y;
    this.radius=5;

    World.add(world,this.body);

    }

    display(){

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke('orange')
        fill('yellow')
        ellipse(x, y, 5);
        pop();

    }
}