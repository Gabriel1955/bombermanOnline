bomb = {
    altura: 20,
    largura: 20,
    cor:"#0",
    
    desenha:function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect =(myPosition_X,myPosition_Y, largura,altura);
    }
}