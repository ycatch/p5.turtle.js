/** Example of turtle graphics for p5.js. 
	Copyright 2015 Yutaka Kachi released under the MIT license.
 */

var turtles_path = []; // array of Turtle objects
var pathPointer = 0;
var turtle;
var tPlane; // graphic plane for turtle

setup = function() {
	var canvas = createCanvas(windowWidth - 20, 240);
	canvas.parent("p5Canvas");
	background(200);
	tPlane = createGraphics(width, height);
	
	// Start turtle code - recode turtle moving.
	turtle = new Turtle();
	turtle.penDown = true;
	turtle.penColor = turtle.color.red;
	for(var i = 0; i < 6; i++){
		turtle.forward(80);
		turtle.right(60);
	}
	// End of turtle code
};

draw = function() {
	// Playback turtle moving for animation.
	background(200);
	turtle.draw2(pathPointer);
	myImage = image(tPlane);
	
	pathPointer += 1;
	if (pathPointer >= turtles_path.length) {
		pathPointer = 0;
	}
};

/** Turtle Data */
function TBody() {
	this.x = 200;
	this.y = 60;
	this.step = 5;
	this.stepAngle = Math.PI / 36;
	this.angleInRadians = 0;
	this.penDown = false;
	this.penColor = "#000000";
	this.lineWidth = 2;
};

/** Turtle class */
function Turtle() {
	var body = new TBody();
	for (var prop in body) {
		this[prop] = body[prop];
	}
	
	this.color = {
		black : "#000000",
		gray: "#808080",
		lightgray: "#C0C0C0",
		red: "#ff0000",
		green: "#00ff00",
		blue: "#0000ff",
		yellow: "#ffff00",
		magenta: "#ff00ff",
		aqua: "#00ffff",
		white: "#ffffff"
	};

	this.forward = function(length) {
		var x0 = this.x;
		var y0 = this.y;
		var xx = sin(this.angleInRadians);
		var yy = cos(this.angleInRadians);
		var count = abs(int(length / this.step));
		var dir = 1;
		if(length < 0) {dir = -1};
		
		for(var i=0; i < count - 1; i++) {
			this.x += dir * this.step * xx;
			this.y += dir * this.step * yy;
			this.copy();			
		}
		this.x = x0 + length * xx;
		this.y = y0 + length * yy;
		this.copy();

	};
	
	this.back = function(length) {
		this.forward(-length);
	};
	
	this.left = function(angleInDegrees) {
		var angle0 = this.angleInRadians;
		var targetAngle = angleInDegrees * Math.PI / 180.0;
		var count = abs(int(targetAngle / this.stepAngle));
		var dir = 1;
		if(targetAngle < 0) {dir = -1};
		
		for(var i=0; i < count - 1; i++) {
			this.angleInRadians += dir * this.stepAngle;
			this.copy();
		}
		this.angleInRadians = angle0 + targetAngle;
		this.copy();
	};
	
	this.right = function(angleInDegrees) {
		this.left(-angleInDegrees);
	};

	// copy TBody object
	this.copy = function() {
		turtles_path.push(new TBody());
		var target = turtles_path[turtles_path.length - 1];
		for (var prop in this) {
			target[prop] = this[prop];
		}
	};

	// draw turtle once
	this.draw = function() {
		tPlane.strokeWeight(1);
		tPlane.stroke(this.color.black);
		tPlane.fill(this.color.white);

		tPlane.ellipse(this.x, this.y, 30, 30);

		var headX = this.x + 20 * sin(this.angleInRadians);
		var headY = this.y + 20 * cos(this.angleInRadians);
		tPlane.line(this.x, this.y, headX, headY);
	};
	
	// drawing turtle in loop
	this.draw2 = function(pointer) {
		var target = turtles_path[pointer];

		strokeWeight(1);
		stroke(this.color.black);
		fill(this.color.white);

		// draw turtle body
		ellipse(target.x, target.y, 30, 30);

		// draw turtle neck
		var headX = target.x + 20 * sin(target.angleInRadians);
		var headY = target.y + 20 * cos(target.angleInRadians);
		line(target.x, target.y, headX, headY);
		
		// draw path by Pen
		if (target.penDown) {
			tPlane.strokeWeight(target.lineWidth);
			tPlane.stroke(target.penColor);
			var nextPointer = pointer + 1;
			if(nextPointer >= turtles_path.length) {
				nextPointer = 0;
			}
			tPlane.line(target.x, target.y, turtles_path[nextPointer].x, turtles_path[nextPointer].y);
		}
	};
};