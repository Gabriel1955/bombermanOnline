var canvas, ctx, ALTURA, LARGURA, frames = 0,
myPosition_X, myPosition_Y;

function click(event) {
  
}
window.onload = function main() {
    ALTURA = window.innerHeight;
    LARGURA = window.innerWidth;

    if (LARGURA >= 500) {
        LARGURA = 630;
        ALTURA = 630;
    }

    canvas = document.createElement("canvas");
    canvas.width = LARGURA;
    canvas.height = ALTURA;
    canvas.style.border = "1px solid #000";
    canvas.style.backgroundImage = "url('img/fundo.jpg')";

    ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);

    document.addEventListener("keydown", function(event) {
        console.info(event.which);
        if(event.which == 80){ //p

        }
        else if(event.which == 38){ //up

        }
        else if(event.which == 40){ //down
            
        }
        else if(event.which == 37){ //left
            
        }
        else if(event.which == 39){ // reight
            
        }
    });
    play();
}

function play() {
    update();
    print();
    window.requestAnimationFrame(play);
}
function update() {
    frames++;
}
function print() {
    blocks_solid.print();
}



