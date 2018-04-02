var bombsPositions = [];
bomb = {
    x: 0,
    y: 30,
    height: 30,
    width: 30,
    ativa: false,
    cor: "#0F0",

    desenha: function () {
        insertBombPosition(this.x+10, this.y);//mais 10 pra centralizar
        sendMyBomb(this.x, this.y);
    },
    print: function () {
        for (i = 0; i < bombsPositions.length; i++) {
            bomb.createBomb(bombsPositions[i].x, bombsPositions[i].y);
        }
    },
    createBomb: function (x, y) {
        var img = new Image();
        img.src = "img/bomb.png";
        ctx.drawImage(img, x, y, this.width, this.height);
    }
}
insertBombPosition = function (x, y) {
    bombsPositions.push({
            x: x,
            y: y
        })
}
sendMyBomb = function(x,y){ 
    sendForServer({
        type:'bomb',
        number:player1.number,
        x:x,
        y:y,
    });
}