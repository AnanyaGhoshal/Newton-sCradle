class Bob{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restituion':0.3,
            'friction':0.5,
            'density':1.2

        }

        this.body = Bodies.circle(x,y,50,options);
        this.radius = 50;

        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("yellow");
        strokeWeight(2);
        stroke("green");
        ellipseMode(CENTER);
        circle(0,0,this.radius);
        pop();



    }
}