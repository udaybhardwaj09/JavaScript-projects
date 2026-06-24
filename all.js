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



/**********/

// Callbacks = a function that is passed as an argument to another function

// sum(displaySum,1,3);

// function sum(callback,x,y){
//     let result = x+y;
//     callback(result);
// }

// function displaySum(result){
//     document.getElementById("myId").textContent = result;
// }


/*****************/

// let fruits = ["apple", "banana", "gwava", "kiwi", "avocado"];

// fruits.forEach(capitalize);
// fruits.forEach(printfruits);

// function printfruits(fruit){
//     console.log(fruit)
// }

// function capitalize(fruit,index,fruits){
//     fruits[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1);
// }


// let nums = [1,2,3,4,5];

// nums.forEach(square);
// nums.forEach(display);

// function square(num,index,nums){
//     nums[index] = Math.pow(num,2);
// }

// function display(num){
//     console.log(num);
// }


/***********/

/*
const students = ["uday", "prakhar", "bhaijaan"];
let studentUpper = students.map(upperCase);
let studentLower = students.map(lowerCase);
console.log(studentUpper);
console.log(studentLower);
function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}
*/

/*
const dates = ["2024-1-10", "2025-5-12","2026-9-11"];
let formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
    let parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
*/


/***********/

// .filter() = creates an array by filtering and keeping only TRUE onse

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let oddnums = numbers.filter(isOdd);
// console.log(oddnums);
// function isOdd(element) {
//     return element%2!==0;
// }


/**********/

// const person = {
//     // key value pairs
//     Name : "Uday Bhardwaj",
//     College : "ABES",
//     Section : "29",
//     Employed : false,
//     sayHello: () => {console.log("Hey, I am Uday Bhardwaj...")},
// }

// console.log(person.Name);
// console.log(person.College);
// console.log(person.Employed);
// person.sayHello();


/*************/
//THIS keyword

// const person = {
//     name : "Guddu Badmash",
//     favfood : "Pan Masala",
//     sayhello : function() {console.log(`hi i am ${this.name}`)},
//     eat : function () {console.log(`${this.name} is eating ${this.favfood}`)}
// }

// person.sayhello();
// person.eat();


/**********/
// constructor = shortcut for objects

// function Car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }

// const car1 = new Car("ford", "mustang", 2024,"red");
// const car2 = new Car("chevrolet", "camaro", 2025, "blue");
// const car3 = new Car("dodge", "charger", 2026, "silver");

// car1.drive();
// car2.drive();
// car3.drive();



/*************/
// CLASSES

class Product{
    constructor(cloth,price){
        this.cloth = cloth;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.cloth}`);
        console.log(`Price: Rs.${this.price}`);
    }

    calculateTotal(salesTax){
        let total = this.price + this.price * salesTax;
        console.log(`Total price (with tax): ${total}`);
    }
}
let product1 = new Product("JEANS", 250);

let salesTax = 0.05
product1.displayProduct();
product1.calculateTotal(salesTax);


/*************/

