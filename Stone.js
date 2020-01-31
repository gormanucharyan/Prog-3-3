var LivingCreature=require("./LivCr.js");
module.exports = class Stone extends LivingCreature {
   
    move() {

        var emptyCells = this.chooseCell(0);
        var cօord = random(emptyCells);

        if (cօord) {
            var x = cօord[0];
            var y = cօord[1];


            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;
        }
    }
    die() {

        matrix[this.y][this.x] = 0;


        for (var i in stoneArr) {
            if (this.x == stoneArr[i].x && this.y == stoneArr[i].y) {
                stoneArr.splice(i, 1);
            }
        }
    }
}
