var grassArr = [];
var eatersArr = [];
var predatorArr = [];
var side = 20;
var matrix = [];
var qarArr = [];
var humanArr = [];

var a = 0;

function makeMatrix() {

	for (var i = 0; i < 50; i++) {
		matrix[i] = [];
		for (var j = 0; j < 50; j++) {
			matrix[i][j] = Math.floor(Math.random() * 5);
		}
	}
}



function setup() {
	makeMatrix();
	noStroke();
	frameRate(5);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');

	for (var y = 0; y < matrix.length; y++) {
		for (var x = 0; x < matrix[y].length; x++) {

			if (matrix[y][x] == 1) {
				var grass = new Grass(x, y);
				grassArr.push(grass);
			}

			else if (matrix[y][x] == 2) {
				var eater = new GrassEater(x, y);
				eatersArr.push(eater);
			}
			else if (matrix[y][x] == 3) {
				var predator1 = new Predator(x, y);
				predatorArr.push(predator1);
			}
			else if (matrix[y][x] == 4) {
				var stone1 = new Stone(x, y);
				stoneArr.push(stone1);

			}
			else if (matrix[y][x] == 5) {
				var human1 = new Human(x, y);
				humanArr.push(human1);

			}
		}
	}


}
function draw() {
	//գծում է աշխարհը
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
	while (predatorArr.length > 200) {
		predatorArr[1].die();
	}
	while (eatersArr.length > 200) {
		eatersArr[1].die();
	}

	while (humanArr.length > 200) {
		humanArr[1].die();
	}

	while (stoneArr.length > 500) {
		stoneArr[1].die();
	}

	

	for (var i in grassArr) {
		grassArr[i].mul();
	}
	for (var i in eatersArr) {
		eatersArr[i].eat();
	}
	for (var i in predatorArr) {
		predatorArr[i].eat();
	}
	for (var i in humanArr) {
		humanArr[i].eat();
	}

	if (eatersArr.length <= 40) {

		for (var x = 0; x < 100; x++) {
			var i = Math.floor(Math.random() * matrix.length);
			var j = Math.floor(Math.random() * matrix.length);

			if (matrix[j][i] != 4)  {
				var eater = new GrassEater(i, j);
				eatersArr.push(eater);
			}
		}
	}

	if (grassArr.length <= 20) {

		for (var x = 0; x < 550; x++) {

			var i = Math.floor(Math.random() * matrix.length);
			var j = Math.floor(Math.random() * matrix.length);

			if (matrix[j][i] != 4)  {
				var grass = new Grass(i, j);
				grassArr.push(grass);
			}
		}
	}

	if (predatorArr.length <= 20) {

		for (var x = 0; x < 150; x++) {

			var i = Math.floor(Math.random() * matrix.length);
			var j = Math.floor(Math.random() * matrix.length);

			{
				if (matrix[j][i] != 4) {
					var predator = new Gishatich(i, j);
					predatorArr.push(predator);
				}
			}
		}
	}

	if (humanArr.length <= 20) {

		for (var x = 0; x < 80; x++) {

			var i = Math.floor(Math.random() * matrix.length);
			var j = Math.floor(Math.random() * matrix.length);

			if (matrix[j][i] != 4)  {
				var human = new Human(i, j);
				humanArr.push(human);
			}

		}

	}

}


