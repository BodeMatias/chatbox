var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.use(express.static("."));

var user = 1;

io.on('connection', (socket) => {
	console.log('a user connected');
	
	io.emit('user', user)
	user++;

	socket.on('chat message', (msg) => {
		console.log(msg)
		io.emit('chat message', {message: msg.message, user: msg.user});
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});