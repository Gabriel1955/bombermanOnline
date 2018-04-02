//create a new WebSocket object.
var wsUri = "ws://192.168.0.102:7776/bomberman/server.php"; 	
websocket = new WebSocket(wsUri); 

websocket.onopen = function(ev) { // connection is open 
    
}
send = function(){ //use clicks message send button	
    
    var msg = {
    message: "mymessage",
    name: "myname",
    color : '<?php echo $colours[$user_colour]; ?>'
    };
    //convert and send data to server
    websocket.send(JSON.stringify(msg));
};

//#### Message received from server?
websocket.onmessage = function(ev) {
    var msg = JSON.parse(ev.data); //PHP sends Json data
    var type = msg.type; //message type
    var umsg = msg.message; //message text
    var uname = msg.name; //user name
    var ucolor = msg.color; //color

    console.info(msg.message);

};

websocket.onerror	= function(ev){
    
} 
websocket.onclose 	= function(ev){
  
}