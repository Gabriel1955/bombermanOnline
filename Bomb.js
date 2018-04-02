bomb = {
<<<<<<< HEAD
    height: 20,
    width: 20,
    cor:"#000",
    
    desenha:function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect (myPosition_X,myPosition_Y, this.width,this.height);
=======
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
>>>>>>> 4b901e79045b76c137b84b861e411d126dfa19f9
    }
}