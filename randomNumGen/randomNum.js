const btn = document.querySelector(".btn");
const num = document.querySelector(".num");
const max = 6;
const min = 1;
let randomNum;


btn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    num.textContent = randomNum;
}