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

// class Product{
//     constructor(cloth,price){
//         this.cloth = cloth;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.cloth}`);
//         console.log(`Price: Rs.${this.price}`);
//     }

//     calculateTotal(salesTax){
//         let total = this.price + this.price * salesTax;
//         console.log(`Total price (with tax): ${total}`);
//     }
// }
// let product1 = new Product("JEANS", 250);

// let salesTax = 0.05
// product1.displayProduct();
// product1.calculateTotal(salesTax);


/*************/
//static

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircum(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI*radius*radius;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircum(10));
// console.log(MathUtil.getArea(10));

// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }

//     static getUserCount(){
//         console.log(`there are ${this.userCount} users`);
//     }
// }

// const user1 = new User("Uday");
// const user2 = new User("Nancy");

// console.log(user1.username);
// console.log(user2.username);
// console.log(User.userCount);

// User.getUserCount();


/************/
//Inheritance

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`this ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//     name = "rabbit";
//     alive = false;
// }
// class Hawk extends Animal{
//     name = "hawk";
// }


// const rabbit = new Rabbit();
// rabbit.eat();
// console.log(rabbit.alive);

// const hawk = new Hawk();
// hawk.eat();
// hawk.sleep();

/********************************* */

// super = keyword is used in classes to call the constructor or
//               access the properties and methods of a parent (superclass)
//               this = this object
//               super = the parent

// class Animal{

//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed}mph`);
//     }
// }

// class Rabbit extends Animal{

//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }

//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }

// class Fish extends Animal{
    
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }

//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// }

// class Hawk extends Animal{
    
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }

//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// rabbit.run();
// fish.swim();
// hawk.fly();


/*************************************/

//  GETTER AND SETTER 

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else console.log(`Length of the first name should be greater than zreo`);
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else console.log(`Length of the last name should be greater than zreo`);
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge > 0){
//             this._age = newAge;
//         }
//         else console.log(`Age must be non negative`);
//     }

//     get firstName(){
//         return this._firstName;
//     }

//     get lastName(){
//         return this._lastName;
//     }

//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }

//     get age(){
//         return this._age;
//     }
// }

// const person = new Person("Uday", "Bhardwaj", 20);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);


/****************************/

//DETRUCTURING

//TYPE - 1
// const person1 = {
//   firstName: 'Spongebob',
//   lastName: 'Squarepants',
//   age: 30,
//   job: "Fry cook",
// };
// const person2 = {
//   firstName: 'Patrick',
//   lastName: 'Star',
//   age: 34
// };
// const {firstName, lastName, age, job="Unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//Type - 2
// function displayPerson({firstName, lastName, age, job = "Unemployed"}){
//     console.log(`name:${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job:${job}`);
// }

// const person1 = {
//   firstName: 'Spongebob',
//   lastName: 'Squarepants',
//   age: 30,
//   job: "Fry cook",
// };
// const person2 = {
//   firstName: 'Patrick',
//   lastName: 'Star',
//   age: 34
// };

// displayPerson(person2);



//ARRAYS - DESTRUCT.

// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ['red', 'green', 'blue', 'black', 'white'];
// [colors[0], colors[4]] = [colors[4], colors[0]]
// console.log(colors);


/********************/
//Nested Objects

// class Person{

//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{

//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Spongebob", 30, "124 Conch St.", 
//                                     "Bikini Bottom", 
//                                     "Int. Waters");

// const person2 = new Person("Patrick", 37, "128 Conch St.", 
//                                     "Bikini Bottom", 
//                                     "Int. Waters");

// const person3 = new Person("Squidward", 45, "126 Conch St.", 
//                                     "Bikini Bottom", 
//                                     "Int. Waters");


// console.log(person1.name);
// console.log(person1.age); 
// console.log(person1.address);                                   
// console.log(person1.address.street);
// console.log(person1.address.city);
// console.log(person1.address.country);


/************************/
//sort() = sorts elements in lexicographic order

// const poeple = [{name: "Uday", age: 30, gpa: 3.0},
//                 {name: "Ujjwal", age: 50, gpa: 1.0},
//                 {name: "Ashish", age: 35, gpa: 2.5},
//                 {name: "Aryan", age: 27, gpa: 4.0}]

// poeple.sort((a,b) => a.gpa - b.gpa);
// console.log(poeple);

 
/******************************* */

//Dates

const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();

console.log(year);
console.log(month);