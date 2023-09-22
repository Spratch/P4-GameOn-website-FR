// DOM Elements
const form = document.querySelector("form");

const firstNameElement = document.getElementById('first');
const lastNameElement = document.getElementById('last');
const emailElement = document.getElementById("email");
const birthdateElement = document.getElementById("birthdate");
const quantityElement = document.getElementById("quantity");
const locationElement = document.querySelector('input[name="location"]:checked');
const locationParentElement = document.querySelector('input[name="location"]').parentElement;
const checkbox1Element = document.getElementById("checkbox1");
const checkbox2Element = document.getElementById("checkbox2");


// Inputs validations
// First name
function firstValidation() {
    if (firstNameElement.value !== null && firstNameElement.value.length >= 2) {
        firstNameElement.parentElement.setAttribute("data-error-visible", "false");
        return true;
    } else {
        firstNameElement.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
        firstNameElement.parentElement.setAttribute("data-error-visible", "true");
    }
}
// Last name
function lastValidation() {
    if (lastNameElement.value !== null && lastNameElement.value.length >= 2) {
        lastNameElement.parentElement.setAttribute("data-error-visible", "false");
        return true;
    } else { 
        lastNameElement.parentElement.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus.");
        lastNameElement.parentElement.setAttribute("data-error-visible", "true");
    }
}
// Email
function emailValidation() {
    let regex = RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
    if (regex.test(emailElement.value)) {
        console.log("email ok");
        emailElement.parentElement.setAttribute("data-error-visible", "false");
        return true;
    } else {
        console.log("email pas ok");
        emailElement.parentElement.setAttribute("data-error", "Veuillez entrer une adresse email valide.");
        emailElement.parentElement.setAttribute("data-error-visible", "true");
    }
}
// Quantity
function quantityValidation() {
    let regex = RegExp('^[0-9]+$');
    if (regex.test(quantityElement.value)) {
        console.log("quantité ok");
        quantityElement.parentElement.setAttribute("data-error-visible", "false");
        return true;
    } else {
        quantityElement.parentElement.setAttribute("data-error", "Veuillez entrer une quantité valide.");
        quantityElement.parentElement.setAttribute("data-error-visible", "true");
    }
}
// Location
function locationValidation() {
    let radios = document.querySelectorAll('input[name="location"]');
    for (let radio of radios) {
        if (radio.checked === true) {
            locationParentElement.setAttribute("data-error-visible", "false");
            return true;
        } 
    }
    locationParentElement.setAttribute("data-error", "Veuillez choisir un lieu.");
    locationParentElement.setAttribute("data-error-visible", "true");
    return false;
}
// Checkbox1
function checkbox1Validation() {
    if (checkbox1Element.checked){
        checkbox1Element.parentElement.setAttribute("data-error-visible", "false");
        return true;
    } else {
        checkbox1Element.parentElement.setAttribute("data-error", "Veuillez accepter les termes et conditions.");
        checkbox1Element.parentElement.setAttribute("data-error-visible", "true");
    }
}

// Validate
function validate() {
    
    const isValid = firstValidation() && lastValidation() && emailValidation() && quantityValidation() && locationValidation() && checkbox1Validation();

    if (isValid) {
            // Form values
            let formDatas = {
                firstName: document.getElementById("first").value,
                lastName: document.getElementById("last").value,
                email: document.getElementById("email").value,
                quantity: document.getElementById("quantity").value,
                location: document.querySelector('input[name="location"]:checked').value,
                checkbox1: document.getElementById("checkbox1").checked,
                checkbox2: document.getElementById("checkbox2").checked
            }        
            console.log(formDatas);
    }
}

// Submit
form.addEventListener("submit", (event) => {
    // prevent default
    event.preventDefault();
});