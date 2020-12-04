class Drop{
	  constructor(x,y){
		    var options={
				friction:0.001,
				restitution:0.1,
				isStatic:false
            		
			}
			this.r=10;
			this.body=Bodies.circle(x, y, 10, options)
			World.add(world, this.body);
			this.image=loadImage("images/rain drop.png");
			this.body.lifetime=300
			}

			showDrop(){
				imageMode(CENTER);
			ellipse()
			image(this.image,this.body.position.x,this.body.position.y,this.r, this.r);
			}

	  update(){
            if(this.body.position.y>height){
				Matter.Body.setPosition(this.body,{x:random(0,1300),y:canvas.height-canvas.height-20});
			}
	  }

}
