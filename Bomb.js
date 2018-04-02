bomb = {
    height: 20,
    width: 20,
    cor:"#000",
    
    desenha:function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect (myPosition_X,myPosition_Y, this.width,this.height);
    }
}