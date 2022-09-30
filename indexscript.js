

let below_nav4 = document.querySelector("#below_nav4");

let arr1 =[
    {
        img: "https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg",
        h3: "Configure your testing environment in 5 minutes",
        p: "Each Mailtrap account comes with an individual testing environment. Integrate it with your app in just a few clicks.",
    },
    {
        img: "https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg",
        h3: "Keep all testing data organized in one place",
        p: "Create individual inboxes for different environments or review servers and group them into relevant projects.",
    },
    {
        img: "https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg",
        h3: "Quickly integrate with Mailtrap API",
        p: "Get started quickly with our well-documented API and configure automated testing with unlimited API calls.",
    },
    {
        img: "https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg",
        h3: "Dig into both the content and source of your emails",
        p: "View messages, check spam scores, validate headers, analyze the HTML support across email clients, and more.",
    },
    {
        img: "https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg",
        h3: "Easily share test emails with your team",
        p: "Manage access to your inboxes for colleagues or clients. Send selected test emails to whitelisted real recipients.",
    },
    {
        img: "https://mailtrap.io/wp-content/uploads/2021/03/ivon__performance.svg",
        h3: "Test your email sending service",
        p: "Send emails to Mailtrap directly from your CRM or email sending service. Simulate sending to multiple recipients.",
    }
];
arr1.forEach(function(e){
    let div1 = document.createElement("div");

    let div2 = document.createElement("div");
    let img = document.createElement("img");
    img.src = e.img;
    let div3 = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerText = e.h3;
    let p = document.createElement("p");
    p.innerText = e.p;
    div2.append(img);
    div3.append(h3,p);
    div1.append(div2,div3);
    below_nav4.append(div1);
});
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener("click", () => {
    nextImage('next');
});
next.addEventListener('click', () => {
    nextImage('prev');
});

function nextImage(direction) {
    if(direction=="next") {
        index++;
        if(index==totalImages) {
            index = 0;
        }
    } else {
        if(index==0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }
    for(let i = 0; i <images.length; i++) {
        images[i].classList.remove("main");
    }
    images[index].classList.add("main");
}

let signup = document.querySelector(".nav_signup");
signup.addEventListener("click", myfun1);

function myfun1(){
    document.location = "signup.html";
}
let nav_login = document.querySelector(".nav_login");
nav_login.addEventListener("click", myfun33);

function myfun33(){
    document.location = "login.html";
}
let sign2 = document.querySelector(".sign2");
sign2.addEventListener("click", signup2);

function signup2(){
    document.location = "signup.html";
}

let last = document.querySelector("#last");
last.addEventListener("click", myfun1)
// window.onscroll = function(){
//     myfunction()
// };
//  let navbar = document.querySelector("#navbar");
 
//  let sticky = navbar.offsetTop;
//  function myfunction() {
//     if(window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky");
//         // navbar.style.backgroundColor = "white";
//     } else {
//         navbar.classList.remove("sticky");
//     }
//  };