let dataArr = JSON.parse(localStorage.getItem("input"));
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let submit = document.querySelector(".green");

submit.addEventListener("click", checking);

function checking(el) {
    el.preventDefault();
    let arr3 = [];
    let obj2 = {
        email2: email.value,
        password2: password.value,
    };
    arr3.push(obj2);
    localStorage.setItem("checks", JSON.stringify(arr3));
    let data = JSON.parse(localStorage.getItem("checks"));
    for(let i = 0; i<dataArr.length; i++) {
        if(data==dataArr) {
            alert("login success");
        } else{
            alert("wrong");
        }
    }
}
