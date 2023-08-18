
let form = document.querySelector('form');
const radios = document.querySelectorAll('input[name="dance"]')
const radios2 = document.querySelectorAll('input[name="color"]')
const radios3= document.querySelectorAll('input[name="minutes"]')
const radios4 = document.querySelectorAll('input[name="bird"]')
const radios5 = document.querySelectorAll('input[name="cons"]')
const result=document.getElementById('result')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let q1 = "";
    let score = 0
    radios.forEach((radio) => {
        if (radio.checked) {
            q1 = radio.value;
        }
    })
    if (q1 == "kadhakali") {
        score ++
        document.querySelector('input[name="dance"]:checked').nextElementSibling.style.color = 'green'

      
    } else {
        document.querySelector('input[name="dance"]:checked').nextElementSibling.style.color = 'red'
        document.getElementById('first').innerHTML = "Answer:kadhakali"
    }
//console.log("-----------------------------------------------------")
    let q2 = "";
    radios2.forEach((a) => {
        if (a.checked) {
            q2 = a.value;
        }
    })
    if (q2 == "7") {
        console.log("true")
        score ++
        document.querySelector('input[name="color"]:checked').nextElementSibling.style.color = 'green'
    }
    else {
        document.querySelector('input[name="color"]:checked').nextElementSibling.style.color = 'red'
        document.getElementById('second').innerHTML = "Answer:7"
    }
    //console.log("-----------------------------------------------------")

let q3= "";
    radios3.forEach((b) => {
        if (b.checked) {
            q3 = b.value;
        }
    })
    if (q3 == "60 minutes") {
        score ++
        document.querySelector('input[name="minutes"]:checked').nextElementSibling.style.color = 'green'
    }
    else {
        document.querySelector('input[name="minutes"]:checked').nextElementSibling.style.color = 'red'
        document.getElementById('third').innerHTML = "60 minutes"
    }
    //console.log("-----------------------------------------------------")

    let q4= "";
    radios4.forEach((b) => {
        if (b.checked) {
            q4 = b.value;
        }
    })
    if (q4 == "peacock") {
        score++
        document.querySelector('input[name="bird"]:checked').nextElementSibling.style.color = 'green'
    }
    else {
        document.querySelector('input[name="bird"]:checked').nextElementSibling.style.color = 'red'
        document.getElementById('fourth').innerHTML = "peacock"
    }
    //console.log("-----------------------------------------------------")

    let q5= "";
    radios5.forEach((c) => {
        if (c.checked) {
            q5 = c.value;
        }
    })
    if (q5 == "21 consonants") {
        score  ++
        document.querySelector('input[name="cons"]:checked').nextElementSibling.style.color = 'green'
    }
    else {
        document.querySelector('input[name="cons"]:checked').nextElementSibling.style.color = 'red'
        document.getElementById('fifth').innerHTML = "21 consonants"
    }
    result.innerHTML=`you got ${score} out of 5`

})
