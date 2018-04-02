bomb = {
    x: 0,
    y: 30,
    height: 30,
    width: 30,
    ativa: false,
    cor: "#0F0",

    desenha: function () {
        insertPosition(this.x, this.y);
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

var bombsPositions = [];
insertPosition = function (x, y) {
    bombsPositions.push(
        {
            x: x,
            y: y
        }
    )
}
//fazer insert e remove de bombs
/*
{
    x: valor,
    y:valor,
}
*/