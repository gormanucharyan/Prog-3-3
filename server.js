var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});


var Grass = require("./Grass");
var GrassEater = require("./GrassEater");
var Human = require("./Human");
var Predator = require("./Predator");
var Stone = require("./Stone");

grassArr = [];
eatersArr = [];
predatorArr = [];
matrix = [];
stoneArr = [];
humanArr = [];

matrix = makeMatrix();

//BOMB FUNCTION//
io.on('connection', function (socket) {
    socket.on('text1', function () {
        var x1 = Math.floor(Math.random() * matrix[0].length);
        var y1 = Math.floor(Math.random() * matrix.length);

        var directions = [
            [x1 - 1, y1 - 1],
            [x1, y1 - 1],
            [x1 + 1, y1 - 1],
            [x1 - 1, y1],
            [x1 + 1, y1],
            [x1 - 1, y1 + 1],
            [x1, y1 + 1],
            [x1 + 1, y1 + 1],
            [x1, y1]
        ];
        for (var i in directions) {
            var x = directions[i][0];
            var y = directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 1) {
                    for (var j in grassArr) {
                        if (x == grassArr[j].x && y == grassArr[j].y) {
                            grassArr.splice(j, 1);
                        }
                    }
                } else if (matrix[y][x] == 2) {
                    for (var j in eatersArr) {
                        if (x == eatersArr[j].x && y == eatersArr[j].y) {
                            eatersArr.splice(j, 1);
                        }
                    }
                } else if (matrix[y][x] == 3) {
                    for (var j in predatorArr) {
                        if (x == predatorArr[j].x && y == predatorArr[j].y) {
                            predatorArr.splice(j, 1);
                        }
                    }
                } else if (matrix[y][x] == 4) {
                    for (var j in stoneArr) {
                        if (x == stoneArr[j].x && y == stoneArr[j].y) {
                            stoneArr.splice(j, 1);
                        }
                    }

                } else if (matrix[y][x] == 5) {
                    for (var j in humanArr) {
                        if (x == humanArr[j].x && y == humanArr[j].y) {
                            humanArr.splice(j, 1);
                        }
                    }

                }
                matrix[y][x] = 7;
            }

        }
    });
    socket.on('text2', function () {
        for (let y2 = 0; y2 < 50; y2++) {
            for (let x2 = 0; x2 < 50; x2++) {
                setTimeout(function () {
                    if (x2 == y2) {
                        for (let i = 0; i <= x2; i++) {
                            if (matrix[y2][x2] == 1) {
                                for (var j in grassArr) {
                                    if (x2 == grassArr[j].x && y2 == grassArr[j].y) {
                                        grassArr.splice(j, 1);
                                    }
                                }
                            } else if (matrix[y2][x2] == 2) {
                                for (var j in eatersArr) {
                                    if (x2 == eatersArr[j].x && y2 == eatersArr[j].y) {
                                        eatersArr.splice(j, 1);
                                    }
                                }
                            } else if (matrix[y2][x2] == 3) {
                                for (var j in predatorArr) {
                                    if (x2 == predatorArr[j].x && y2 == predatorArr[j].y) {
                                        predatorArr.splice(j, 1);
                                    }
                                }
                            } else if (matrix[y2][x2] == 4) {
                                for (var j in stoneArr) {
                                    if (x2 == stoneArr[j].x && y2 == stoneArr[j].y) {
                                        stoneArr.splice(j, 1);
                                    }
                                }

                            } else if (matrix[y2][x2] == 5) {
                                for (var j in humanArr) {
                                    if (x2 == humanArr[j].x && y2 == humanArr[j].y) {
                                        humanArr.splice(j, 1);
                                    }
                                }

                            }
                            matrix[y2][x2 - i] = 0;
                            matrix[y2 - i][x2] = 0;
                            matrix[y2][x2] = 0;
                        }
                    }
                }, 1000);
            }
        }



    })
});






server.listen(3000, () => {
    console.log("Port is connected");
});

setInterval(game, 500);

addMatrix();
var obj = {
    m: matrix,
}



function makeMatrix() {
    for (var i = 0; i < 50; i++) {
        matrix[i] = [];
        for (var j = 0; j < 50; j++) {
            matrix[i][j] = Math.floor(Math.random() * 5);
        }
    }
    return matrix;
}

function addMatrix() {
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

function game() {

    while (predatorArr.length > 150) {
        predatorArr[Math.floor(Math.random() * predatorArr.length)].die();
    }
    while (eatersArr.length > 220) {
        eatersArr[Math.floor(Math.random() * eatersArr.length)].die();
    }

    while (humanArr.length > 150) {
        humanArr[Math.floor(Math.random() * humanArr.length)].die();
    }

    while (stoneArr.length > 50) {
        stoneArr[Math.floor(Math.random() * stoneArr.length)].die();
    }



    for (var i in grassArr) {
        grassArr[i].mul();
    }
    // for (var i in eatersArr) {
    //     eatersArr[i].eat();
    // }
    // for (var i in predatorArr) {
    //     predatorArr[i].eat();
    // }
    // for (var i in humanArr) {
    //     humanArr[i].eat();
    // }

    if (eatersArr.length <= 40) {

        for (var x = 0; x < 100; x++) {
            var i = Math.floor(Math.random() * matrix.length);
            var j = Math.floor(Math.random() * matrix.length);

            if (matrix[j][i] == 0) {
                var eater = new GrassEater(i, j);
                eatersArr.push(eater);
            }
        }
    }

    if (grassArr.length <= 20) {

        for (var x = 0; x < 550; x++) {

            var i = Math.floor(Math.random() * matrix.length);
            var j = Math.floor(Math.random() * matrix.length);

            if (matrix[j][i] == 0) {
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
                if (matrix[j][i] == 0) {
                    var predator = new Predator(i, j);
                    predatorArr.push(predator);
                }
            }
        }
    }

    if (humanArr.length <= 20) {

        for (var x = 0; x < 80; x++) {

            var i = Math.floor(Math.random() * matrix.length);
            var j = Math.floor(Math.random() * matrix.length);

            if (matrix[j][i] == 0) {
                var human = new Human(i, j);
                humanArr.push(human);
            }

        }

    }

    io.sockets.emit('matrix', obj);
}