var socket = io();
var side = 20;
var matrix = [];

function setup() {
	noStroke();
	createCanvas(50 * side,50 * side);
	background('#acacac');
}

function draw() {
	background('#acacac');
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 1) {
				fill("green");
				rect(j * side, i * side, side, side);
			}

			else if (matrix[i][j] == 2) {
				fill("yellow");
				rect(j * side, i * side, side, side);
			}
			else if (matrix[i][j] == 0) {
				fill('#acacac');
				rect(j * side, i * side, side, side);
			}
			else if (matrix[i][j] == 3) {
				fill('red');
				rect(j * side, i * side, side, side);
			}
			else if (matrix[i][j] == 4) {
				fill('black');
				rect(j * side, i * side, side, side);
			}
			else if (matrix[i][j] == 5) {
				fill('whitesmoke');
				rect(j * side, i * side, side, side);
			}
		}
	}
}

function handleMatrix(m) {
	matrix = m;
}

socket.on('matrix', handleMatrix);