var table1;
var table2;
var player1;
var player2;
var ball;
var leftScore = 0;
var rightScore = 0;
var flag = false;
var escape_pressed = false;
var package;


function setup(){


	//noCursor();

	frameRate(60);
	createCanvas(windowWidth / 2 , windowHeight / 1.5);

	table1 = new Tables(width - width/1 , 0);
	table2 = new Tables(width - 16 , 0);

	player1 = new Players(width - 1000 , height/2 - 45);
	player2 = new Players(width - 44 , height/2 - 45);

	ball = new Ball();
}

function draw(){
	background('black');

	table1.show();
	table2.show();

	player1.update(1);
	player1.show();

	player2.update(2);
	player2.show();

	ball.update();
	ball.show();

	textSize(32);
	fill(40, 184, 184);
	text(leftScore , 55 , 40);
	text(rightScore , width - 80 , 40);
	



	if(flag == true){
		textSize(32);
		fill(40, 184, 184);
		text("Paused" , width/2 - 70 , height/2 - 50);
	}


	if(escape_pressed == true){
		textSize(32);
		fill(40, 184, 184);
		text("Press 'Esc' to start" , width/2 - 70 , height/2 - 50);

	}
}


function keyTyped(){

	if ( (key === 'p' || key === 'P') && escape_pressed == false){

		if (flag == false){
			noLoop();
			flag = true;
		}
		else{		
			loop();
			flag = false;
		}
	}

}

function keyPressed() {
    if (keyIsDown(ESCAPE) && flag == false) {                   // if escape is pressed. Reset everything. Don't let them move!
        if (escape_pressed == false) {
            escape_pressed = true;
            ball.totalReset();
            player1.resetPlayer();
            player2.resetPlayer();
        }
        else {
            escape_pressed = false;
            ball = new Ball();                    // by creating new object of ball, it undos all the prohibitions of movement by setting new speed to ball.
        }
    }
}


