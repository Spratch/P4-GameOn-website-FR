// DOM Elements
const form = document.querySelector("form");


// Inputs validations
// First name
function firstValidation() {
    let inputValue = document.getElementById("first").value;
    if (inputValue !== null && inputValue.length >= 2) return true;
}
// Last name
function lastValidation() {
    let inputValue = document.getElementById("last").value;
    if (inputValue !== null && inputValue.length >= 2) return true;
}
// Email
function emailValidation() {
    let inputValue = document.getElementById("email").value;
    let regex = RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    return regex.test(inputValue);
}
// Quantity
function quantityValidation() {
    let inputValue = document.getElementById("quantity").value;
    let regex = RegExp('^[0-9]+$');
    return regex.test(inputValue);
}
// Location
function locationValidation() {
    let radios = document.querySelectorAll('input[name="location"]')
    for (let radio of radios) {
        if (radio.checked === true) return true
    }
    return false;
}
// Checkbox1
function checkbox1Validation() {
    let inputValue = document.getElementById("checkbox1").checked;
    return inputValue;
}


// submit
form.addEventListener("submit", (event) => {
    // prevent default
    event.preventDefault();

    let formValid = false;

    if (firstValidation() 
        && lastValidation() 
        && emailValidation() 
        && quantityValidation() 
        && locationValidation() 
        && checkbox1Validation()) {
            formValid = true;
    }

    if (formValid) {
        form.submit();
    }
});