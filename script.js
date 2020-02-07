var socket = io();
var side = 20;
var matrix = [];
socket.on('matrix', function (data) {
	matrix = data;
});
function setup() {
	noStroke();
	createCanvas(50 * side, 50 * side);
	background('#acacac');
}
// var btn1 = document.getElementById("btn1");
// btn1.addEventListener('click', () =>{
// 	socket.emit('b1');
// });

// var btn2 = document.getElementById("btn2");
// btn1.addEventListener('click', (data) =>{
// 	socket.emit('b2',data);
// });

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

// function handleMatrix(m) {
// 	matrix = m;
// }

function func() {
	socket.emit("text");
}