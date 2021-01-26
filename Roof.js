class Roof{

    constructor(x,y,width,height){

        var options={

            'isStatic':true,
            'density':5
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        fill("grey");
        rect(pos.x,pos.y,this.width,this.height);
       

    }



}