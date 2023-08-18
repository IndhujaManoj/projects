let users=[
    
       {username:"user1",password:"pass1"},
        {username:"user2",password:"pass2"},
        {username:"user3",password:"pass3"}

]
function submitHandling(event){
    event.preventDefault()
   


let username=document.getElementById('name').value;
localStorage.setItem("name",username)
let password=document.getElementById('password').value;
localStorage.setItem("password",password)


for(let user of users){
    if(user.username===username && user.password===password){
      //  alert('login successfull!')
   window.location.href="loaded.html"
userHistory()
        return

    }
}
alert("Invalid username or password!!!")
}

let form = document.querySelector('form')
form.addEventListener("submit",submitHandling)

