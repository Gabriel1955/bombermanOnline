var speed = 10;

player1 = {
    x: 30,
    y: 560,
    With: 40,
    Height: 40,
    speed: speed,
    number: 0,
    print: function () {
        var img = new Image();
        img.src = "img/play1.png";
        ctx.drawImage(img, this.x, this.y, this.With, this.Height);
    }
}
player2 = {
    x: 0,
    y: 0,
    With: 40,
    Height: 40,
    speed: speed,
    number: 0,
    print: function () {
        if (player2.number != 0) {
            var img = new Image();
            img.src = "img/play2.png";
            ctx.drawImage(img, this.x, this.y, this.With, this.Height);
        }
    }
}

sendMyMove = function () {
    obj = {
        type:"position",
        number: player1.number,
        x: player1.x,
        y: player1.y,
    }
    sendForServer(obj);
}
initRound = function () {
    obj = {
        message: "initRound"
    }
    sendForServer(obj);
}
