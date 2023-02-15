const { io } = require("socket.io-client"); 
var socket = io.connect('http://localhost:5000', { withCredentials: true });
console.log("Teri maa ki ankh")
socket.on('connect', function () {

    console.log("///////")
    socket.emit('message', 'Hello from the client!');
});