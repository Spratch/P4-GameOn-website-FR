// DOM Elements
const form = document.querySelector("form");

// Form values

// let firstName = document.getElementById("first").value;
// let lastName = document.getElementById("last").value;
// let email = document.getElementById("email").value;
// let birthdate = document.getElementById("birthdate").value;
// let quantity = document.getElementById("quantity").value;
// let location = document.getElementsByName("location").value;
// let checkbox1 = document.getElementById("checkbox1").value;
// let checkbox2 = document.getElementById("checkbox2").value;


// Inputs validations
// First name
function firstValidation(firstName) {
    if (firstName !== null && firstName.length >= 2) return true;
}
// Last name
function lastValidation(lastName) {
    if (lastName !== null && lastName.length >= 2) return true;
}
// Email
function emailValidation(email) {
    let regex = RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    return regex.test(email);
}
// Quantity
function quantityValidation(quantity) {
    let regex = RegExp('^[0-9]+$');
    return regex.test(quantity);
}
// Location
function locationValidation() {
    let radios = document.querySelectorAll('input[name="location"]');
    for (let radio of radios) {
        if (radio.checked === true) return true
    }
    return false;
}
// Checkbox1
function checkbox1Validation(checkbox1) {
    return checkbox1;
}

// Validate
function validate() {
    let formDatas = {
        firstName: document.getElementById("first").value,
        lastName: document.getElementById("last").value,
        email: document.getElementById("email").value,
        birthdate: document.getElementById("birthdate").value,
        quantity: document.getElementById("quantity").value,
        location: document.querySelector('input[name="location"]:checked').value,
        checkbox1: document.getElementById("checkbox1").checked,
        checkbox2: document.getElementById("checkbox2").checked
    }
    

    if (firstValidation(formDatas.firstName) 
        && lastValidation(formDatas.lastName) 
        && emailValidation(formDatas.email) 
        && quantityValidation(formDatas.quantity) 
        && locationValidation() 
        && checkbox1Validation(formDatas.checkbox1)) {
            console.log(formDatas);
    }
}

// Submit
form.addEventListener("submit", (event) => {
    // prevent default
    event.preventDefault();
    validate();
});