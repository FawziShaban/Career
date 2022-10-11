let userName = document.querySelector("[name='one']");
let emailAddres = document.querySelector("[name='two']");

let myForm = document.forms[0].onsubmit = function(action){
    let userInput=false;
    let emailInput=false;

    if(userName.value !== ""){
        userInput=true;
    }
    if(emailAddres !==""){
        emailInput=true;
    }
    if(userInput===false || emailInput===false){
        action.preventDefault();
    }
}

let myBtn = document.getElementById("up");

window.onscroll =function(){
    if(window.scrollY>=500){
        myBtn.style.cssText="display:block; transtion:0.5s";
    }
    else {
        myBtn.style.display="none"
    }
}
myBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}