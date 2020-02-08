var socket = io();
var side = 20;
var matrix = [];
socket.on('matrix', drawM);
function setup() {
	noStroke();
	createCanvas(50 * side, 50 * side);
	background('#acacac');
}

function drawM(obj) {
	var matrix = obj.m;
	
	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] == 1) {
				fill("green");
			}
			else if (matrix[i][j] == 2) {
				fill("yellow");
			}
			else if (matrix[i][j] == 3) {
				fill('red');
			}
			else if (matrix[i][j] == 4) {
				fill('black');
			}
			else if (matrix[i][j] == 5) {
				fill('whitesmoke');
			} else if(matrix[i][j] == 7){
				fill('#acacac')
			}
			else{
				fill('#acacac');
			}
			rect(j * side, i * side, side, side);
		}
	}
}

function func1() {
	socket.emit("text1");
}

function func2() {
	socket.emit("text2");
}