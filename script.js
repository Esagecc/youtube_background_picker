document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue


function partyPurple() {
   document.querySelector('body').style.background = "no-repeat top / cover url('img/TImesSquareNight_460.gif')"
   document.querySelector('body').style.color = 'rgb(235, 235, 14)'
   document.getElementById('location').innerText = 'New York City'
}

function partyGreen() {
    document.querySelector('body').style.background = "no-repeat top / cover url('img/grand_canyon_gif.gif')"
    document.querySelector('body').style.color = 'blue'
    document.getElementById('location').innerText = 'Grand Canyon National Park'
}

function partyBlue() {
    document.querySelector('body').style.background = "no-repeat top / cover url('img/hawaii_gif.gif')"
    document.querySelector('body').style.color = 'red'
    document.getElementById('location').innerText = 'Hawaii'
}


