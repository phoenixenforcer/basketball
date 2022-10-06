let homeScore=0
let scoreHomeEl=document.getElementById("score-home")

let guestScore=0
let scoreGuestEl=document.getElementById("score-guest")


function one(){
scoreHomeEl.textContent=homeScore+=1   
}
function two(){
scoreHomeEl.textContent=homeScore+=2 
}
function three(){
scoreHomeEl.textContent=homeScore+=3
}

function oneg(){
scoreGuestEl.textContent=guestScore+=1   
}
function twog(){
scoreGuestEl.textContent=guestScore+=2 
}
function threeg(){
scoreGuestEl.textContent=guestScore+=3
}