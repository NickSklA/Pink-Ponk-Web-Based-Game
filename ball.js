function Ball(){
	
	this.x = width/2;
	this.y = height/2;

	var angle = random(TWO_PI);  // generate random angle [0 , 360] 

	this.xspeed = 8 * cos(angle);
	this.yspeed = 8 * sin(angle);


	this.show = function(){

		fill('red');
		ellipse(this.x , this.y , 40 , 40);
	}


	this.update = function(){

		this.x += this.xspeed;
		this.y += this.yspeed;
		this.yspeed = this.bounce(this.y , this.yspeed , 0 , windowHeight);
		this.xspeed = this.bounce(this.x , this.xspeed , 0 , windowWidth);
		

	}


	this.bounce = function(position , speed , min , max){


		if(position > max || position < min){
			speed *= -1;
		}
		return speed;
	}

}
