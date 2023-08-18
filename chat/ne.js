if (!localStorage.getItem('message')) {
	localStorage.setItem('message', JSON.stringify({ messages: [] }));
  }
  var messageInput = document.getElementById("message-input");
  let logoutButton=document.getElementById('logout-button')
  
  
  logoutButton.addEventListener('click',function(event){
	  event.preventDefault()
	  window.location.href="chat.html"
  })
  function addMessage(){
	let storage = JSON.parse(localStorage.getItem('message')) // object
	let name = localStorage.getItem('name')
	storage.messages.push({ name: name, message: messageInput.value })
	console.log(storage)
  
	let input = messageInput.value
	console.log(input,"in")
	localStorage.setItem('message', JSON.stringify(storage))
	messageInput.value = ''; 
  
	display()
  }
  
  
  function display(){
	let myobject = JSON.parse(localStorage.getItem('message')) // object
	let messages = ""
  
	for (let i = 0; i < myobject.messages.length; i++) {
	  messages += `<strong>${myobject.messages[i].name}:</strong> ${myobject.messages[i].message}<br>`
	}
  
	var chatContainer = document.getElementById("chat")
	chatContainer.innerHTML = messages;
  
	let chat = document.getElementById('chat-container')
	chat.scrollTop = chat.scrollHeight;
  }
  
  var sendButton = document.getElementById("send-button");
  sendButton.addEventListener("click", addMessage);
  
  display()
  