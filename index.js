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
            player1.y -= player1.speed;
        }
        else if(event.which == 40){ //down
            player1.y += player1.speed;
        }
        else if(event.which == 37){ //left
            player1.x -= player1.speed;
        }
        else if(event.which == 39){ // reight
            player1.x += player1.speed;
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
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    blocks_solid.print();
    player1.print();

    
}



