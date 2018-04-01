var canvas, ctx, ALTURA, LARGURA, frames = 0;



function click(event){
    alert("test");
}
window.onload = function main(){
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;
    
    if(LARGURA >= 500){
        LARGURA = 600;
        ALTURA = 600;
    }

    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    document.addEventListener("mousedown", click);

}

function play(){
    update();
    print();

    window.requestAnimationFrame(play);

}
function update(){
    frames++;
}
function print(){

}