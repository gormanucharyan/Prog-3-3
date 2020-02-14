var LivingCreature = require("./LivCr.js");
module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        if (this.multiply >= 12) {
            var emptyCells = this.chooseCell(0);
            var rand = Math.floor(Math.random() * emptyCells.length);
            var coord=emptyCells[rand];
            if (coord) {
                var x = coord[0];
                var y = coord[1];
                var newGrass = new Grass(x, y);
                grassArr.push(newGrass);
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
        else if (this.multiply > 24) {
            this.multiply = 0;
        }
    }
}
