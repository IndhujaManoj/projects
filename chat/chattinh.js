
if (!localStorage.getItem('message')) {
	localStorage.setItem('message', JSON.stringify([]))
}
var messageInput = document.getElementById("message-input");
let logoutButton = document.getElementById('logout-button')
var userName = localStorage.getItem('name')


logoutButton.addEventListener('click', function (event) {
	event.preventDefault()
	window.location.href = "chat.html"
})
function addMessage() {
	let storage = JSON.parse(localStorage.getItem('message'))//array

	
	storage.push({ [userName]: messageInput.value })

	localStorage.setItem('message', JSON.stringify(storage))
	messageInput.value = '';

	display()

}


function display() {
	let myarray = JSON.parse(localStorage.getItem('message'))
	let messages = ""


	for (let i = 0; i < myarray.length; i++) {
		if (Object.keys(myarray[i]) == userName) {
			messages += `<div class="text-right "><label class="current-user">${Object.values(myarray[i])}</label></div></br>`


		} else {

			messages += `<div class="text-left"><label class="old-user"><small>${Object.keys(myarray[i])}</small></br>${Object.values(myarray[i])}</label></div></br>`

		}
	}





	var chatContainer = document.getElementById("chat")

	chatContainer.innerHTML = messages;


	let chat = document.getElementById('chat-container')
	chat.scrollTop = chat.scrollHeight;

}
var sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", addMessage);

display()

