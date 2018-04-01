var speed = 4;

var player1 = {
    x: 30,
    y: 600,
    With: 20,
    Height: 20,
    speed: speed,
    print: function(){
        ctx.fillStyle = "#FFF";
        ctx.fillRect(this.x,this.y, this.With, this.Height);
    }
}
