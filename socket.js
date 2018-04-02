//create a new WebSocket object.
var wsUri = "ws://172.16.165.9:7776/bomberman/server.php"; 	
websocket = new WebSocket(wsUri); 

websocket.onopen = function(ev) { // connection is open 
    
}
sendForServer = function(object){ //use clicks message send button	
    //convert and send data to server
    websocket.send(JSON.stringify(object));
};

//#### Message received from server?
websocket.onmessage = function(ev) {
    var msg = JSON.parse(ev.data); //PHP sends Json data
    if(msg.type == 'initRound'){
        if(player1.number == 0){//init my player
            player1.number = msg.number;
            player1.x = msg.x;
            player1.y = msg.y;
            sendMyMove();
        }
        else{
            player2.number = msg.number;
            player2.x = msg.x;
            player2.y = msg.y;
            sendMyMove();
        }
    }
    else if(msg.type == "position" && msg.number != player1.number){
        player2.number = msg.number;
        player2.x = msg.x;
        player2.y = msg.y;
    }
    else if(msg.type == "bomb" && msg.number != player1.number){
        insertBombPosition(msg.x,msg.y);
    }
};

websocket.onerror	= function(ev){
    alert("Erro no servidor");
} 
websocket.onclose 	= function(ev){
  
}