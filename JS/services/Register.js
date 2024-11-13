const name = document.querySelector('#name');
const lastname = document.querySelector('#lastname');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const messageElement = document.querySelector('#message');
const submitButton = document.querySelector('#submitButton');

const formRegister = document.querySelector('#formRegister');


formRegister.addEventListener('submit', registerNewUser);


function registerNewUser(e) {
    e.preventDefault();

    if (!name.value || !lastname.value || !username.value || !email.value || !password.value) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Por favor, completa todos los campos.';
        return; 
    }

    const userData = {
        name: name.value,
        lastname: lastname.value,
        username: username.value,
        email: email.value,
        password: password.value
    }

    submitButton.disabled = true;

    fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.message.includes("User created successfully")) {
                messageElement.style.color = 'green';
                messageElement.textContent = data.message;

                formRegister.reset();

                setTimeout(() => {
                    window.location.href = 'Login.html';
                    formRegister.reset();
                }, 3000);
            } else {
                messageElement.style.color = 'red';
                messageElement.textContent = data.message;
            }
        })
        .catch((error) => {
            console.log(error);
            messageElement.style.color = 'red';
            messageElement.textContent = 'Ocurrió un error al registrar el usuario.';
        })
        .finally(() => {
            submitButton.disabled = false;
        });

}