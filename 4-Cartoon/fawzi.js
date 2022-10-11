let myBtn = document.getElementById("up");
myBtn.style.display="none"
window.onscroll= function(){
    if(window.scrollY>=450){
        myBtn.style.display="block";
    }
    else{
        myBtn.style.display="none"
    }
}
myBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}

let links = document.querySelector("#link");
let click = document.querySelector("#special")

click.onclick=function(){
    links.style.opacity="1";
}
window.onmouseup=function(){
    links.style.opacity="0";
}
let userName = document.querySelector("[name='one']");
let emailAddres = document.querySelector("[name='two']");
let phoneNumber = document.querySelector("[name='three']");

let myForm = document.forms[1].onsubmit = function(action){
    let userLock = false ;
    let emailLock = false ;
    let phoneLock = false ;

    if(userName.value !==""){
        userLock=true
    }
    if(emailAddres.value !==""){
        emailLock=true
    }
    if(phoneNumber.value !==""){
        phoneLock=true
        }

    if(userLock===false || emailLock===false || phoneLock === false){
        action.preventDefault();
    }
};

let myTimer = document.querySelector(".timer")
let mySecond = document.querySelector(".sec")
let myMinutes = document.querySelector(".min")
let myHours = document.querySelector(".hrs")
let myDays = document.querySelector(".dys")

let Timer = function(){
    mySecond.innerHTML -=1
    if(mySecond.innerHTML==="0"){
        myMinutes.innerHTML -=1;
        mySecond.innerHTML="59";
    }
    else if(myMinutes.innerHTML==="-1"){
        myHours.innerHTML -=1;
        myMinutes.innerHTML ="59";
        mySecond.innerHTML = "59";
    }
    else if(myHours.innerHTML==="-1"){
        myDays.innerHTML -=1;
        myHours.innerHTML = "23";
        myMinutes.innerHTML ="59";
        mySecond.innerHTML = "59";
    }
}
setInterval(Timer,1000)