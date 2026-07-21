// ---------- JSON.stringify() ----------

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}];

// const jsonString = JSON.stringify(people);

// console.log(jsonString);


// ---------- JSON.parse() ----------

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob","age": 30,"isEmployed": true},
                     {"name": "Patrick","age": 34,"isEmployed": false},
                     {"name": "Squidward","age": 50,"isEmployed": true},
                     {"name": "Sandy","age": 27,"isEmployed": false}]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);


// ---------- fetch() ----------

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error));