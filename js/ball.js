function Ball(){
	
	this.x = width/2;
	this.y = height/2;

	this.diameter = 32;

	this.xspeed = 7; 
	this.yspeed = 6;


	this.show = function(){


		fill(40, 184, 184);
		ellipse(this.x , this.y , this.diameter , this.diameter);
		//textSize(20);
		//fill(40, 184, 184);
		//text("(" + this.x + " ," + this.y + ")" , this.x + 10 , this.y - 10);
	}

	this.update = function(){

		this.x += this.xspeed;
		this.y += this.yspeed;

		this.bounce();
	}





	this.bounce = function(){


		// player1 score 

		if ( this.x >= width - 16){
			this.xspeed = 5; 
			this.yspeed = 6 * random([-1, 1]);
			player1.resetPlayer();
			player2.resetPlayer();	
			leftScore += 1;
			this.x = width/2;
			this.y = height/2;
			this.xspeed *= -1;
		}


		// player2 score

		if(this.x <= 16){
			this.xspeed = 5; 
			this.yspeed = 6 * random([-1, 1]);
			player1.resetPlayer();
			player2.resetPlayer();		
			rightScore += 1;
			this.x = width/2;
			this.y = height/2;
			this.xspeed *= 1;
		}

		if(this.y >= height - 16  || this.y <= 16){

			this.yspeed *= -1;

		}



		// player 1

		if (this.x <= player1.x + this.diameter/2 + player1.playerWidth && this.y <= player1.y + player1.ylength && this.y >= player1.y){


				this.xspeed *= -1;
			

		}


		//player 2

		if (this.x >= player2.x - this.diameter/2  && this.y <= player2.y + player2.ylength && this.y >= player2.y){

			
				this.xspeed *= -1;
			

		}

	}
	
    this.totalReset = function() {
        leftScore = 0;
        rightScore = 0;
        this.x = width/2;
        this.y = height/2;
        this.xspeed = 0;
        this.yspeed = 0;
    }

}