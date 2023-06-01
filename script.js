const myInput = document.querySelector("#psw");
const letter = document.querySelector("#letter");
const capital = document.querySelector("#capital");
const number = document.querySelector("#number");
const length = document.querySelector("#length");
const confirmPsw = document.querySelector("#confirmPsw");

myInput.addEventListener("keyup", () => {
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    let upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    let numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");    
    }
    if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
})

confirmPsw.addEventListener("keyup", () => {
    if(confirmPsw.value === myInput.value) {
        confirmPsw.classList.remove("invalidInput");
        confirmPsw.classList.add("validInput");
    } else {
        confirmPsw.classList.remove("validInput");
        confirmPsw.classList.add("invalidInput");
    }
})
