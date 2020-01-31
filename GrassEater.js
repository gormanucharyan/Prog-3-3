var LivingCreature=require("./LivCr.js");
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;

    }

    move() {

        
        var emptyCells = this.chooseCell(0);
        var cօord = random(emptyCells); // 4,3

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
        }
    }



    eat() {

        var grassCells = this.chooseCell(1);
        var coord = random(grassCells);


        if (coord) {
            var x = coord[0];
            var y = coord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;


            this.multiply++;


            this.energy++;


            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }


            if (this.multiply == 10) {
                this.mul()
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

            var newEater = new GrassEater(x, y);
            eatersArr.push(newEater);


            matrix[y][x] = 2;
        }
    }


    die() {

        matrix[this.y][this.x] = 0;


        for (var i in eatersArr) {
            if (this.x == eatersArr[i].x && this.y == eatersArr[i].y) {
                eatersArr.splice(i, 1);
            }
        }
    }

}