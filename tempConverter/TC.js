const textBox = document.getElementById("textBox");
const toFaren = document.getElementById("toFaren");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {

    if(toFaren.checked){
        temp = (textBox.value * 1.8) + 32;
        result.textContent = `${temp} Degree F`;
    }
    else if(toCelcius.checked){
        temp = (5/9) * (textBox.value-32);
        result.textContent = `${temp} Degree C`;
    }
    else{
        result.textContent = "Select a unit";
    }

}