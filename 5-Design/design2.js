let mySearch = document.querySelector(".search-up")
let myClose = document.querySelector(".close")
let mySearchDiv = document.querySelector(".search")
mySearch.onclick = function(){
    mySearchDiv.classList.toggle("search-div")
}
myClose.onclick = function(){
    mySearchDiv.classList.toggle("search-div")
}


let myCloseIcon = document.querySelector(".close-cart")
let myShopCart = document.querySelector(".shop")
let myShopIcon = document.querySelector(".fa-shopping-cart")

let myBars1Div = document.querySelector(".bars3")
let myBars1Icon = document.querySelector(".bars1")
let myClose1Icon = document.querySelector(".bars3 .close-cart")
let myBody = document.querySelector("body")
myBars1Icon.onclick = function(){
    myBars1Div.style.cssText ="right:0";
    myBody.classList.toggle("overlay")
}
myClose1Icon.onclick = function(){
    myBars1Div.style.cssText ="right:-350px";
    myBody.classList.toggle("overlay")

}
myShopIcon.onclick = function(){
    myShopCart.style.cssText="right:0;"
    myBody.classList.toggle("overlay")

}

myCloseIcon.onclick = function(){
    myShopCart.style.cssText="right:-350px;"
    myBody.classList.toggle("overlay")

}

let links = document.querySelector(".links");
let myIconBars1 = document.querySelector(".fa-bars")
let mySwiper = document.querySelector(".swiper")

myIconBars1.onclick = function(){
    links.classList.toggle("height")
    mySwiper.classList.toggle("padding")
}
window.onresize = function(){
    if(mySwiper.className="swiper padding" && window.innerWidth>992){
        mySwiper.classList.remove("padding")
    }
}
let myHeader = document.querySelector(".header")
let myArrowScrolling = document.querySelector(".fa-chevron-up");
window.onscroll  = function(){
    if(window.scrollY >50){
        myHeader.classList.add("fixed")
    }
    else{
        myHeader.classList.remove("fixed")
    }
    if(window.scrollY > 500){
        myArrowScrolling.style.opacity="1"
    }
    else{
        myArrowScrolling.style.opacity="0"
    }
}
myArrowScrolling.onclick = function(){
    window.scrollTo({
        top: 0
    })
}

let myLis = document.querySelectorAll(".ul ul li")
let myCards = document.querySelectorAll(".all-product .card")
let myWomen = document.querySelector(".women")

for(let k=8; k<myCards.length;k++){
    myCards[k].style.display="none"
}


for(let i = 0 ; i<myLis.length ; i++){
    myLis[i].onclick = function(){
        for(let j = 0 ; j<myLis.length ; j++){
                myLis[j].classList.remove("ul-click")
            }
            myLis[i].classList.add("ul-click")
            for(let h =0 ; h<myCards.length ; h++){
                if(myLis[i].innerText ==="Best Seller"){
                    myCards[h].style.display="none"
                    if(myCards[h].className.includes("Best Seller")){
                        myCards[h].style.display="block"
                    }
                }
                if(myLis[i].innerText ==="Featured"){
                    myCards[h].style.display="none"
                    if(myCards[h].className.includes("Featured")){
                        myCards[h].style.display="block"
                    }
                }
                if(myLis[i].innerText ==="Sale"){
                    myCards[h].style.display="none"
                    if(myCards[h].className.includes("Sale")){
                        myCards[h].style.display="block"
                    }
                }
                if(myLis[i].innerText ==="Top Rate"){
                    myCards[h].style.display="none"
                    if(myCards[h].className.includes("Top Rate")){
                        myCards[h].style.display="block"
                    }
                }
            }
    }
}


let mySpanYear = document.querySelector(".year")
let myYear = new Date().getFullYear();
mySpanYear.innerText = myYear
let myTime;
let myLocalTime = document.querySelector(".local-time")
function myTimer(){
    myTime = new Date().toLocaleTimeString()
    myLocalTime.innerText = myTime
}
myTimer()
let myLocalTimer = setInterval(myTimer,1000)

let myNightMode = document.querySelector(".night-mode .mode span");
let myMode = document.querySelector(".night-mode .mode");
let myHtml =document.querySelector("*")
let myClick  = document.querySelector(".ul-click")

myMode.onclick = function(){
    myNightMode.classList.toggle("left")
    if(myNightMode.className === "left"){
        myHtml.style.background="#1c1616"
        myHtml.style.color="#464646"
    }
    else{
        myHtml.style.background="white"
        myHtml.style.color="black"
    }
}
if(myLocalTime.innerText.includes("PM")){
    myHtml.style.background="#1c1616"
    myHtml.style.color="#464646"
    myNightMode.classList.toggle("left")
}
else{
    myHtml.style.background="white"
    myHtml.style.color="black"
    myNightMode.classList.remove("left")
}