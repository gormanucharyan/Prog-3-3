module.exports = class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        if (this.multiply >= 8) {
            var emptyCells = this.chooseCell(0);
            var coord = random(emptyCells);
            if (coord) {
                var x = coord[0];
                var y = coord[1];
                var newGrass = new Grass(x, y);
                grassArr.push(newGrass);
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }
}
