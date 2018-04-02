var blocks_solid = {
    print: function(){
        var aux_y = false;
        var aux_x = false;
       for(i=0;i<630;i+=30){
            aux_y = !aux_y;
            for(j=0;j<630;j+=30){
               aux_x = !aux_x;
                if(i==0 || j==0 || i==600 || j==600){
                this.createNewBlock(i,j,30,30);
               }
               else if(aux_x && aux_y){
                    this.createNewBlock(i,j,30,30);
               }              
            }
       }
    },
    createNewBlock: function(x,y,Height,With){
        var img = new Image();
        img.src = "img/bloco_1.png";
        ctx.drawImage(img,x,y,With, Height);
    }
}