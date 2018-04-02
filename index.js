var canvas, ctx, ALTURA, LARGURA, frames = 0,
    myPosition_X = 100, myPosition_Y = 100;

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

    document.addEventListener("keydown", function (event) {
        console.info(event.which);
        if (event.which == 13) { //enter
            bomb.x = player1.x;
            bomb.y = player1.y;
            bomb.ativa = true;
            bomb.desenha();
        }
        else if (event.which == 38 && canMoveUp(player1.x,player1.y)) { //up
            player1.y -= player1.speed;
            sendMyMove();
        }
        else if (event.which == 40 && canMoveDown(player1.x,player1.y)) { //down
            player1.y += player1.speed;
            sendMyMove();
        }
        else if (event.which == 37 && canMoveLeft(player1.x,player1.y)) { //left
            player1.x -= player1.speed;
            sendMyMove();
        }
        else if (event.which == 39 && canMoveReight(player1.x,player1.y)) { // reight
            player1.x += player1.speed;
            sendMyMove();
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
    player2.print();
    bomb.print();

}



