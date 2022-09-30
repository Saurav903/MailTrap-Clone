
let submit = document.querySelector(".green");

submit.addEventListener("click", checking);

function checking(el) {
    el.preventDefault();
    let obj2 = {
        "email": document.querySelector("#email1").value,
        "password": document.querySelector("#password1").value,
    };
    let dataArr = JSON.parse(localStorage.getItem("input"));
    if((obj2.email)==dataArr.email && (obj2.password)==dataArr.password) {
        alert("login success");
        submit.innerText = "Login Success"
        submit.style.backgroundColor = "green";
        document.location = "index.html";
    } else{
        alert("wrong credential");
    }
}

let loginp = document.querySelector(".nav_login");
loginp.addEventListener("click", direct);

function direct() {
    document.location = "login.html";
}

let signp = document.querySelector(".nav_signup");
signp.addEventListener("click", direct2);

function direct2() {
    document.location = "signup.html";
}
