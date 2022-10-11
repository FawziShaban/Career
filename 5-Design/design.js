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
let myBody = document.querySelector("body")


myShopIcon.onclick = function(){
    myShopCart.style.cssText="right:0;"
    myBody.classList.toggle("overlay")
}

myCloseIcon.onclick = function(){
    myShopCart.style.cssText="right:-350px;"
    myBody.classList.toggle("overlay")
}

let links = document.querySelector(".links");
let myIconBars = document.querySelector(".fa-bars")
let mySwiper = document.querySelector(".swiper")

myIconBars.onclick = function(){
    links.classList.toggle("height")
    mySwiper.classList.toggle("padding")
}
window.onresize = function(){
    if(mySwiper.className="swiper padding" && window.innerWidth>992){
        mySwiper.classList.remove("padding")
        links.classList.remove("height")
        mySwiper.style.padding="0"
    }
    if(window.innerWidth<991){
        myHeader.classList.add("fixed")
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
let myFilterButton = document.querySelector(".filter-button")
let myFilterParent = document.querySelector(".filter");

let mySearchButton = document.querySelector(".search-button")
let mySearchParent = document.querySelector(".search1");
let filterDiv = document.querySelector(".filter-div")
let searchDiv = document.querySelector(".search-div")

myFilterButton.onclick = function(){
    myFilterParent.classList.toggle("arrow");
    filterDiv.classList.toggle("filter-div-height")
    searchDiv.classList.remove("search-div-height")
}
mySearchButton.onclick = function(){
    mySearchParent.classList.toggle("arrow")
    searchDiv.classList.toggle("search-div-height")
    filterDiv.classList.remove("filter-div-height")
}

let myLis = document.querySelectorAll(".ul ul li")
let myCards = document.querySelectorAll(".all-product .card")
let myWomen = document.querySelector(".women")

for(let i = 0 ; i<myLis.length ; i++){
    myLis[i].onclick = function(){
        for(let j = 0 ; j<myLis.length ; j++){
            myLis[j].classList.remove("ul-click")
        }
        myLis[i].classList.add("ul-click")
        for(let h =0 ; h<myCards.length ; h++){
            if(myLis[i].innerText ==="All Products"){
                myCards[h].style.display="block"
            }
            if(myLis[i].innerText ==="Women"){
                myCards[h].style.display="block"
                if(myCards[h].className !=="card women"){
                    myCards[h].style.display="none"
                }
            }
            if(myLis[i].innerText ==="Men"){
                myCards[h].style.display="block"
                if(myCards[h].className !=="card men"){
                    myCards[h].style.display="none"
                }
            }
            if(myLis[i].innerText ==="Bag"){
                myCards[h].style.display="none"
            }
            if(myLis[i].innerText ==="Shoes"){
                myCards[h].style.display="block"
                console.log("ss")
                if(myCards[h].className !=="card shose"){
                    myCards[h].style.display="none"
                }
            }
            if(myLis[i].innerText ==="Watches"){
                myCards[h].style.display="block"
                if(myCards[h].className !=="card watch"){
                    myCards[h].style.display="none"
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