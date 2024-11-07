let nameInput = document.querySelector('.grid1');
let cardName = document.querySelector('#c-name')
let numberInput = document.querySelector('.grid2');
let cardNumber = document.querySelector('#c-number') ;
let month = document.querySelector('#mm-card')
let year = document.querySelector('#yy-card');
let monthInput = document.querySelector('.mm');
let yearInput = document.querySelector('.yy')
let cvcInput = document.querySelector('.cvc');
let cvcCard = document.querySelector('.cvcc');
let form = document.querySelector('.form');
let afterForm  = document.querySelector('.after-form');
let btnSubmit = document.querySelector('.btn');
let spanName = document.querySelector('.span-name');
let spanMM = document.querySelector('.span-mmyy'); 
let spanYY = document.querySelector('.span-yy'); 
let spanCvc = document.querySelector('.span-cvc');
let spanNumber = document.querySelector('.span-number'); 
let displayForm = document.querySelector('.display-form'); 
let contineBtn = document.querySelector('#contine'); 


numberInput.addEventListener("input", () => numberInput.value = formatNumber(numberInput.value.replaceAll(" ","")));
const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
    if(index !== 0 && !(index % 4)) seed += " ";
    return seed + next;
}, "");


nameInput.addEventListener("input", function() {
    if (nameInput.value.length > 0){
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
    if(cvcInput.value.length > 0) {
        cvcCard.innerHTML = cvcInput.value; 
    }
});

function validateLuhn(numberInput) {

    input = numberInput.replace(/\s+/g, '');
    let reversedInput = input.split('').reverse().join('');
    let total = 0;
    for (let i = 0; i < reversedInput.length; i++) {
      let digit = parseInt(reversedInput[i]);
      if (i % 2 == 1) {
        digit *= 2;
      }
      if (digit > 9) {
        digit -= 9;
      }
      
      total += digit;
    }
    document.querySelector('.span-number').innerHTML = 'La tarjeta de crédito es válida.'

    if (total % 10 == 0) {
        document.querySelector('.span-number').style.color = 'green'
        
        return true; 
    } else {
        document.querySelector('.span-number').innerHTML = '¡La tarjeta de crédito no es válida!'
    }
  }

numberInput.addEventListener("input", function() {
     if (this.value.length === this.maxLength) {
        validateLuhn(numberInput.value.toString());
   
     }
});

numberInput.addEventListener("input", function() {
    if(numberInput.value.length > 0) {
        cardNumber.innerHTML = numberInput.value; 
    }
})

btnSubmit.addEventListener("click", function(event) {
    // Prevenir el comportamiento predeterminado del submit.
    event.preventDefault();

    // Validar que todos los campos estén completos y sean válidos.
    if (nameInput.value.length < 1) {
        spanName.innerHTML = 'Por favor ingresa tu nombre';
    }
    if (monthInput.value.length < 1) {
        spanMM.innerHTML = 'Complete';
    }
    if (yearInput.value.length < 1) {
        spanYY.innerHTML = 'Complete';
    }
    if (cvcInput.value.length < 1) {
        spanCvc.innerHTML = 'Complete';
    }
    if (numberInput.value.length <= 0) {
        spanNumber.innerHTML = '¡Por favor ingresa una tarjeta de crédito válida!';
    }

    
    if (
        nameInput.value.length > 2 &&
        document.querySelector('.span-number').innerHTML === 'La tarjeta de crédito es válida.' &&
        monthInput.value.length >= 2 &&
        yearInput.value.length >= 2 &&
        cvcInput.value.length >= 3
    ) {

        const formData = {
            name: nameInput.value,
            cardNumber: numberInput.value.replace(/\s+/g, ''),
            expirationMonth: monthInput.value,
            expirationYear: yearInput.value,
            cvc: cvcInput.value
        };


        console.log(formData);

        displayForm.style.display = "none";
        afterForm.style.visibility = "visible";
    }
});


contineBtn.addEventListener("click", function() {
    afterForm.style.visibility = "hidden";
    displayForm.style.display = "block";
});
