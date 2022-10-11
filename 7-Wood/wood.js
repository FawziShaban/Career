let myClick = document.querySelector(".myclick");
let myClick2 = document.querySelector(".myclick2");
let myData = document.querySelector(".mydata");
let myLinks = document.querySelector(".one")

myClick.onclick = function () {
    myData.style.cssText = "right : 0"
    myLinks.style.cssText = "right : -8px";

}
document.body.onkeydown = function () {
    myData.style.cssText = "right : -412px"
    myLinks.style.cssText = "right : -430px";
}


let myArrow1 = document.querySelector(".arrow1")
let myPvc = document.querySelector(".pvc")

myArrow1.onclick = function () {
    myPvc.classList.toggle("display")
}

let myArrow2 = document.querySelector(".arrow2")
let myWoods = document.querySelector(".woods")

myArrow2.onclick = function () {
    myWoods.classList.toggle("display")
}

let myArrow3 = document.querySelector(".arrow3")
let myPhoto = document.querySelector(".photo")

myArrow3.onclick = function () {
    myPhoto.classList.toggle("display")
}

let myArrow4 = document.querySelector(".arrow4")
let myMedia = document.querySelector(".media")

myArrow4.onclick = function () {
    myMedia.classList.toggle("display")
}

let myArrow5 = document.querySelector(".arrow5")
let myOl5 = document.querySelector(".ol5")

myArrow5.onclick = function () {
    myOl5.classList.toggle("display")
}

let myArrow6 = document.querySelector(".arrow6")
let myOl6 = document.querySelector(".ol6")

myArrow6.onclick = function () {
    myOl6.classList.toggle("display")
}
let myArrow7 = document.querySelector(".arrow7")
let myOl7 = document.querySelector(".ol7")

myArrow7.onclick = function () {
    myOl7.classList.toggle("display")
}

let myArrow8 = document.querySelector(".arrow8")
let myOl8 = document.querySelector(".ol8")

myArrow8.onclick = function () {
    myOl8.classList.toggle("display")
}

let myPlay = document.querySelector(".fa-play")
let iFrame = document.querySelector("iframe")
let myClose = document.querySelector(".fa-times-circle")

myPlay.onclick = function(){
    iFrame.classList.toggle("iframe")
    myClose.style.display="block"
}

myClose.onclick= function(){
    if(iFrame.className ==="iframe"){
        iFrame.classList.remove("iframe")
        myClose.style.display="none"
    }
}

let myDate = document.querySelector(".mydate");
let myFullDate = new Date();

myDate.innerHTML= myFullDate.getFullYear()
