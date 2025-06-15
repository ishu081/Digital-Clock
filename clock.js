let invi1 = document.getElementById("invi1")
let invi2s = document.getElementById("invi2")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let hour = document.getElementById("hour")
let todayDate = document.getElementById("todayDate");

let blinkInterval1;
function toogle1(){
    if (invi1.style.visibility== 'hidden'){
        invi1.style.visibility= 'visible';
    }
    else{
        invi1.style.visibility= 'hidden';
    }
}
let blinkInterval2;
function toogle2(){
    if (invi2.style.visibility== 'hidden'){
        invi2.style.visibility= 'visible';
    }
    else{
        invi2.style.visibility= 'hidden';
    }
}
window.onload = function() {
    blinkInterval1 = setInterval(toogle1, 500);
    blinkInterval2 = setInterval(toogle2, 500);
    blinkInterval3 = setInterval(nowDateTime,500);

    console.log('Blinking started automatically on page load!');
};

let blinkInterval3;
function nowDateTime() {
let now= new Date();
console.log(now);
todayDate.innerHTML= now;


let seconds = now.getSeconds();
console.log(seconds)
sec.innerHTML=seconds;

let minutes = now.getMinutes();
console.log(minutes)
min.innerHTML=minutes;

let hours = now.getHours();
console.log(hours)
hour.innerHTML=hours;
}



let day=now.getDay();
console.log(day);