function inputHandler(){
	var textField = document.getElementById('message')
	var textFieldValue = document.getElementById('message').value

	if(textFieldValue != ''){
		socket.emit('chat message', {message: textFieldValue, user: userinfo})
	}

	textField.value = ''
}
