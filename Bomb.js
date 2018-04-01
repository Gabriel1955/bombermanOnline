bomb = {
    x: 0,
    y: 0,
    height: 20,
    width: 20,

    cor:"#0F0",
    
    desenha:function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect (myPosition_X,myPosition_Y, this.width,this.height);

    }
}