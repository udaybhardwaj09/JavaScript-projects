// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value === "ERROR"){
        display.value = input;
    }
    else{
        display.value += input; 
    }
    // .textcontent is not used because input element doesn't store text, it stores value
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}