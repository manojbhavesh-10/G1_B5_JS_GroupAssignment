const user = "ADMIN";
const password = "ADMIN";

// Validate the username and password

let userName = document.querySelector(".username");
let userPassword = document.querySelector(".password");

const errorMsg = document.getElementById("error");

function validation() {
    console.log(userName.value);
    console.log(userPassword.value);
    if(userName.value !== user || userPassword.value !== password) {
        errorMsg.style.display = "block";
        return false;
    }
    return true;
}

//Halt the function of backbutton

window.history.forward();
function preventBackBtn() {
    window.history.forward();
}