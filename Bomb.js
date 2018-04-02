bomb = {
    x: 0,
    y: 0,
    height: 20,
    width: 20,
    ativa: false,
    cor:"#0F0",
    
    desenha:function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect (this.x,this.y, this.width,this.height);

    }
}