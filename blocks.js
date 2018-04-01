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
        ctx.fillStyle = "#000";
        ctx.fillRect(x,y,With, Height);
    }
}