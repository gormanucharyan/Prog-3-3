var LivingCreature=require("./LivCr.js");
module.exports = class Predator extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 22;
    }
    move() {


        var emptyCells = this.chooseCell(0);
        var coord = random(emptyCells);

        if (coord) {
            var x = coord[0];
            var y = coord[1];


            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

        }

        var emptyCells1 = this.chooseCell(1);
        var coord1 = random(emptyCells1);
        if (coord1) {
            var x = coord1[0];
            var y = coord1[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 1;
            this.x = x;
            this.y = y;
        }
    }

    eat() {

        var eaterCells = this.chooseCell(2);
        var coord = random(eaterCells);


        if (coord) {
            var x = coord[0];
            var y = coord[1];


            matrix[y][x] = 3;
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
    }

    mul() {

        var emptyCells = this.chooseCell(0);
        var coord = random(emptyCells);


        if (coord) {
            var x = coord[0];
            var y = coord[1];

            var newpredator = new Gishatich(x, y);
            predatorArr.push(newpredator);


            matrix[y][x] = 3;
        }
    }


    die() {

        matrix[this.y][this.x] = 0;


        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
            }
        }
    }

}