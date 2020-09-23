var messageList = document.getElementById('message-list')
var socket = io()
var userinfo;
var firstconnected = true

socket.on('user', function(user){
	if(firstconnected){
		userinfo = user
	}
	firstconnected = false;
})

socket.on('chat message', function(response){
	var li = document.createElement('li')
	li.appendChild(document.createTextNode(`User ${response.user}: ${response.message}`))
	messageList.appendChild(li)
})