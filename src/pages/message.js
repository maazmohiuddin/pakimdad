const { io } = require("socket.io-client"); 
var socket = io.connect('https://pakimdaad.herokuapp.com', { withCredentials: true });
console.log("Teri maa ki ankh")
socket.on('connect', function () {

    console.log("///////")
    socket.emit('message', 'Hello from the client!');
});