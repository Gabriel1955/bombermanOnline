bomb = {
    x: 0,
    y: 30,
    height: 30,
    width: 30,
    ativa: false,
    cor:"#0F0",
    
    desenha:function(){
        var img = new Image();
        img.src = "img/bomb.png";
        ctx.drawImage(img,this.x,this.y, this.width,this.height);
    }
}