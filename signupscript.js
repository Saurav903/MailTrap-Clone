let sign = document.querySelector(".green");

sign.addEventListener("click", myfun2)

function myfun2(event) {
    event.preventDefault();
    document.location = "signemail.html";
    // console.log("hi");
    if (sign.style.display === "none") {
        sign.style.display = "block";
        
    } else {
        sign.style.display = "none";
      }
}

let nav_login = document.querySelector(".nav_login");

nav_login.addEventListener("click", loginpagemove);

function loginpagemove() {
    document.location = "login.html";
}
let nav_signup = document.querySelector(".nav_signup");

nav_signup.addEventListener("click", signuppagemove1);

function signuppagemove1() {
    document.location = "signup.html";
}



