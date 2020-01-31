module.exports = class Human {
    constructor(x, y) {
        super(x, y);
        this.energy = 25;

    }
    updateCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.updateCoordinates();
        return super.chooseCell(character);
    }

    move() {
        var emptyCells = this.chooseCell(0);
        var cօord = random(emptyCells);

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
        }
        var emptyCells1 = this.chooseCell(1);
        var cօord1 = random(emptyCells1);

        if (cօord1) {
            var x = cօord1[0];
            var y = cօord1[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;


            this.x = x;
            this.y = y;

        }
    }
    eat() {

        var eaterCells1 = this.chooseCell(2);
        var coord1 = random(eaterCells1);

        if (coord1) {
            var x = coord1[0];
            var y = coord1[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;


            this.multiply++;


            this.energy++;


            for (var i in eatersArr) {
                if (x == eatersArr[i].x && y == eatersArr[i].y) {
                    eatersArr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul();
                this.multiply = 0;
            }


        } else {

            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }


        var eaterCells2 = this.chooseCell(3);
        var coord2 = random(eaterCells2);
        if (coord2) {
            var x = coord2[0];
            var y = coord2[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

            this.multiply++;


            this.energy++;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul();
                this.multiply = 0;
            }


        } else {

            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }

    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var coord = random(emptyCells);


        if (coord) {
            var x = coord[0];
            var y = coord[1];

            var newhuman = new Human(x, y);
            humanArr.push(newhuman);


            matrix[y][x] = 5;
        }
    }


    die() {

        matrix[this.y][this.x] = 0;


        for (var i in humanArr) {
            if (this.x == humanArr[i].x && this.y == humanArr[i].y) {
                humanArr.splice(i, 1);
            }
        }
    }

}

