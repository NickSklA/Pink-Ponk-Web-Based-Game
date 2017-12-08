function Players(x , y){
	
	this.x = x;
	this.y = y


	this.show = function(){
		
		fill(255);
		rect(this.x , this.y, 20 , 150 , 9);
	}

	this.update = function keyPressed(player){


		if(player == 2){
			if(keyIsDown(UP_ARROW)){
				this.y -= 10;
			}

			if(keyIsDown(DOWN_ARROW)){
				this.y += 10;
			}
		}
		else if(player == 1){
			if(keyIsDown(87)){
				this.y -= 10;
			}

			if(keyIsDown(83)){
				this.y += 10;
			}
		}
		
		
	}
}
