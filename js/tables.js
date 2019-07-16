function Tables(x, y) {

	this.y = y;
	this.x = x;
	this.tableWidth = 15;

	this.show = function() {
		fill('white');
		rect(this.x , this.y, this.tableWidth, height-1);
	}
}
