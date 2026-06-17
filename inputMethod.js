// *USER INPUT TYPES*

// First Way

username = window.prompt("Whats your name?");
console.log(username);

//Second Way

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);

    document.getElementById("myH1").textContent = `Hello ${username}`;
}