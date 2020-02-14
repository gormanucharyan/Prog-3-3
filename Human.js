var LivingCreature = require("./LivCr.js");
module.exports = class Human extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 25;

    }

    move() {
        var emptyCells = this.chooseCell(0);
        var rand = Math.floor(Math.random() * emptyCells.length);
        var coord = emptyCells[rand];

        if (coord) {
            var x = coord[0];
            var y = coord[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
        }
        var emptyCells1 = this.chooseCell(1);
        var rand1 = Math.floor(Math.random() * emptyCells1.length);
        var coord1 = emptyCells[rand1];

        if (coord1) {
            var x = coord1[0];
            var y = coord1[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 1;


            this.x = x;
            this.y = y;

        }
    }
    eat() {

        var eaterCells1 = this.chooseCell(2);
        var rand1 = Math.floor(Math.random() * eaterCells1.length);
        var coord1 = eaterCells1[rand1];

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
        var rand2 = Math.floor(Math.random() * eaterCells2.length);
        var coord2 = eaterCells2[rand2];
        if (coord2) {
            var x = coord2[0];
            var y = coord2[1];


            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

            this.multiply++;


            this.energy++;


            for (var i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
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
        var rand = Math.floor(Math.random() * emptyCells.length);
        var coord = emptyCells[rand];


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

