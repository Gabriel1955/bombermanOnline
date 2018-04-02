//create a new WebSocket object.
var wsUri = "ws://192.168.0.102:7776/bomberman/server.php"; 	
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
        setPositionPlayer(x,y);
    }
    console.info(msg);

};

websocket.onerror	= function(ev){
    
} 
websocket.onclose 	= function(ev){
  
}