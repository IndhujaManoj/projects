local=localStorage.getItem('name')
console.log(local)

document.getElementById('head').innerHTML=local
function pass(){
   // window.location.href='update.html'
    //password=localStorage.getItem('password')
    const username = localStorage.getItem("name");
const password = localStorage.getItem("password");

const newUsernameInput = document.createElement("input");
const newPasswordInput = document.createElement("input");
newUsernameInput.type = "text";
newPasswordInput.type = "password";

const saveButton = document.createElement("button");
saveButton.innerText = "Save Changes";
saveButton.addEventListener("click", () => {
  const newPassword = newPasswordInput.value;
  if (newPassword.length < 5) {
    alert("Password must be at least 5 characters long.");
    return;
  }

  const newUsername = newUsernameInput.value;
  localStorage.setItem("name", newUsername);
  localStorage.setItem("password", newPassword);

  alert("Your changes have been saved.");
  document.getElementById('head').innerHTML=newUsername
container.style.display='none'
});

const container = document.createElement("div");
container.appendChild(document.createTextNode("New username: "));
container.appendChild(newUsernameInput);
container.appendChild(document.createElement("br"));
container.appendChild(document.createTextNode("New password: "));
container.appendChild(newPasswordInput);
container.appendChild(document.createElement("br"));
container.appendChild(saveButton);

document.body.appendChild(container);

}