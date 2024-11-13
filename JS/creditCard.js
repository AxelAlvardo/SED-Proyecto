let nameInput = document.querySelector('.grid1');
let cardName = document.querySelector('#c-name');
let numberInput = document.querySelector('.grid2');
let cardNumber = document.querySelector('#c-number');
let month = document.querySelector('#mm-card');
let year = document.querySelector('#yy-card');
let monthInput = document.querySelector('.mm');
let yearInput = document.querySelector('.yy');
let cvcInput = document.querySelector('.cvc');
let cvcCard = document.querySelector('.cvcc');
let form = document.querySelector('.form');
let afterForm = document.querySelector('.after-form');
let btnSubmit = document.querySelector('.btn');
let spanName = document.querySelector('.span-name');
let spanMM = document.querySelector('.span-mmyy');
let spanYY = document.querySelector('.span-yy');
let spanCvc = document.querySelector('.span-cvc');
let spanNumber = document.querySelector('.span-number');
let spanIdentification = document.querySelector('.span-identification');
let spanPhone = document.querySelector('.span-phone');
let displayForm = document.querySelector('.display-form');
let contineBtn = document.querySelector('#contine');

let identificationInput = document.querySelector('#identification');
let phoneInput = document.querySelector('#phone');

nameInput.addEventListener("input", function() {
    if (nameInput.value.length > 0) {
        cardName.innerHTML = nameInput.value;
    }
});

monthInput.addEventListener("input", function() {
    if (monthInput.value.length > 0) {
        month.innerHTML = monthInput.value;
    }
});

yearInput.addEventListener("input", function() {
    if (yearInput.value.length > 0) {
        year.innerHTML = yearInput.value;
    }
});

cvcInput.addEventListener("input", function() {
    if (cvcInput.value.length > 0) {
        cvcCard.innerHTML = cvcInput.value;
    }
});

identificationInput.addEventListener("input", function() {

});

phoneInput.addEventListener("input", function() {
});

btnSubmit.addEventListener("click", function(event) {
    event.preventDefault();

    if (nameInput.value.length < 1) {
        spanName.innerHTML = 'Por favor ingresa tu nombre';
    }
    if (identificationInput.value.length < 1) {
        spanIdentification.innerHTML = 'Por favor ingresa tu número de identificación';
    }
    if (phoneInput.value.length < 1) {
        spanPhone.innerHTML = 'Por favor ingresa tu número de teléfono';
    }

    if (
        nameInput.value.length > 2 &&
        identificationInput.value.length > 0 &&
        phoneInput.value.length > 0
    ) {
        displayForm.style.display = "none";
        afterForm.style.visibility = "visible";
    }
});

contineBtn.addEventListener("click", function() {
    afterForm.style.visibility = "hidden";
    displayForm.style.display = "block";
});
