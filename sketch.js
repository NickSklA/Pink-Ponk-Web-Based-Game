var table1;
var table2;
var player1;
var player2;
var ball;
var leftScore = 0;
var rightScore = 0;

function setup(){
	frameRate(60);
	createCanvas(windowWidth, windowHeight);
	table1 = new Tables(windowWidth - 2000);
	table2 = new Tables(windowWidth - 100);
	player1 = new Players(windowWidth - 1900 , 400);
	player2 = new Players(windowWidth - 200 , 400);
	ball = new Ball();
}

function draw(){
	background(153);

	table1.show();
	table2.show();

	player1.update(1);
	player1.show();

	player2.update(2);
	player2.show();

	ball.update();
	ball.show();

	textSize(32);
	fill(255);
	text(leftScore , 10 , 40);
	text(rightScore , width - 25 , 40);

}
