//eventListener = click, mouseover, mouseout;


//-----------------------------------//


// const myBox = document.getElementById("myBox");
// const myBtn = document.getElementById("myBtn");

// myBox.addEventListener("click", (event) => {
//     myBox.textContent = "OUCHH!! 😣";
//     myBox.style.backgroundColor = "Tomato";
// })
// myBtn.addEventListener("click", (event) => {
//     myBox.textContent = "OUCHH!! 😣";
//     myBox.style.backgroundColor = "Tomato";
// })

// myBox.addEventListener("mouseover", event => {
//     myBox.textContent = "Dont Do It 😨";
//     myBox.style.backgroundColor = "yellow";
// })
// myBtn.addEventListener("mouseover", event => {
//     myBox.textContent = "Dont Do It 😨";
//     myBox.style.backgroundColor = "yellow";
// })

// myBox.addEventListener("mouseout", event => {
//     myBox.textContent = " Click Me 😊";
//     myBox.style.backgroundColor = "lightgreen";
// })
// myBtn.addEventListener("mouseout", event => {
//     myBox.textContent = " Click Me 😊";
//     myBox.style.backgroundColor = "lightgreen";
// })


//----------------------------------------//

// eventListener = keydown, keyup

//---------------------------------------//

// const emo = document.getElementById("emo");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", (event) => {
//     emo.textContent = "😣";
//     emo.style.backgroundColor = "Tomato";
// })

// document.addEventListener("keyup", (event) => {
//     emo.textContent = "😊";
//     emo.style.backgroundColor = "lightblue";
// })

// document.addEventListener("keydown", event => {

//     if(event.key.startsWith("Arrow")){

//         event.preventDefault();

//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }

//         emo.style.top = `${y}px`;
//         emo.style.left = `${x}px`
//     }
// });