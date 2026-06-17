// let day = "gsf";

// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thurday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }


// ****


// const fullName = "uday bhardwaj";
// let firstName = fullName.slice(0,4);
// console.log(firstName);

// *****

// let username = window.prompt("Enter ur name : ");
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);
  


// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`Enter your username`);
//     password = window.prompt(`Enter your password`);

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     }
//     else{
//         console.log("invalid credentials");
//     }
// }


// *****


// for(let i = 0; i<=2; i++){
//     console.log(i);
// }


//****


// const textBox = document.getElementById("textBox");
// const toFaren = document.getElementById("toFaren");
// const toCelcius = document.getElementById("toCelcius");
// const result = document.getElementById("result");
// let temp;

// function convert() {

//     if(toFaren.checked){
//         temp = (textBox.value * 1.8) + 32;
//         result.textContent = `${temp} Degree F`;
//     }
//     else if(toCelcius.checked){
//         temp = (5/9) * (textBox.value-32);
//         result.textContent = `${temp} Degree C`;
//     }
//     else{
//         result.textContent = "Select a unit";
//     }

// }




// let fruit = ["apple", "oragnge", "banana"];

// console.log(fruit);
// fruit.push("coconut");
// console.log(fruit);
// // fruit.pop()




// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     console.log(foods);
// }

// const food1 = "paneer";
// const food2 = "dal";
// const food3 = "roti";
// const food4 = "aalu bengan";

// openFridge(food1,food2,food3,food4);
// getFood(food1,food2,food3,food4);
