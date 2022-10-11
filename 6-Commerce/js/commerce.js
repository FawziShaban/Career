let myNavbar = document.querySelector("nav");
let myLinks = document.querySelectorAll("nav div a");
window.onscroll = function () {
  if (window.scrollY > 50) {
    myNavbar.style.cssText =
      "background-color:white ; color:black ;border-bottom:4px solid #FFD00B";
    myNavbar.classList.add("fixed");
    for (let i = 0; i < myLinks.length; i++) {
      myLinks[i].classList.add("black-color");
    }
  } else {
    myNavbar.style.cssText = "background-color:transparent ; color:white";
    for (let i = 0; i < myLinks.length; i++) {
      myLinks[i].classList.remove("black-color");
    }
    myNavbar.classList.remove("fixed");
  }
};

let myYear = document.querySelectorAll(".year");

let myDate = new Date();
for (let i = 0; i < myYear.length; i++) {
  myYear[i].innerHTML = myDate.getFullYear();
}

let mySecond = document.querySelector(".four .text h1");
let myMinutes = document.querySelector(".three .text h1");
let myHours = document.querySelector(".two .text h1");
let myDays = document.querySelector(".one .text h1");

let Timer = function () {
  mySecond.innerHTML -= 1;
  if (mySecond.innerHTML === "0") {
    myMinutes.innerHTML -= 1;
    mySecond.innerHTML = "59";
  }
  if (myMinutes.innerHTML === "-1") {
    myHours.innerHTML -= 1;
    mySecond.innerHTML = "59";
    myMinutes.innerHTML = "59";
  }
  if (myHours.innerHTML === "-1") {
    myDays.innerHTML -= 1;
    mySecond.innerHTML = "59";
    myMinutes.innerHTML = "59";
    myHours.innerHTML = "23";
  }
};
setInterval(Timer, 1000);

let myInput = document.querySelector(".promo-code-input input");
let myCloseIcon = document.querySelector(".promo-code-input span");

myCloseIcon.addEventListener("click", function () {
  myInput.value = "";
});

let myMinus = document.querySelectorAll(".minus");
let myPlus = document.querySelectorAll(".plus");
let myContent = document.querySelectorAll(".content-faq");
let myBigDiv = document.querySelectorAll(".first-faq");

for (let i = 0; i < myPlus.length; i++) {
  myPlus[i].onclick = function () {
    myContent[i].style.cssText = "height:250px ; margin-top:35px";
    myPlus[i].style.cssText = "display:none";
    myBigDiv[i].style.cssText = "background-color:white";
    myMinus[i].style.cssText = "display:block";
  };
}
for (let i = 0; i < myPlus.length; i++) {
  myMinus[i].onclick = function () {
    myContent[i].style.cssText = "height:0";
    myPlus[i].style.cssText = "display:block";
    myBigDiv[i].style.cssText = "background-color:transparent";
    myMinus[i].style.cssText = "display:none";
  };
}
