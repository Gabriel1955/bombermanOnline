var speed = 4;

player1 = {
    x: 30,
    y: 600,
    With: 40,
    Height: 40,
    speed: speed,
    print: function () {
        var img = new Image();
        img.src = "img/play1.png";
        ctx.drawImage(img, this.x, this.y, this.With, this.Height);
    }
}
sendMyMove = function () {
    obj = {
        x: player1.x,
        y: player1.y,
    }
    sendForServer(obj);
}
initRound = function(){
    obj = {
        message: "initRound"
    }
    sendForServer(obj);   
}
