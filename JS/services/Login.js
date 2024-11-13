const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginMessage = document.querySelector('#loginMessage');


const formLogin = document.querySelector('#formLogin');

formLogin.addEventListener('submit', loginUser);

function loginUser(e) {
    e.preventDefault();

    const loginUser = {
        username: username.value,
        password: password.value
    }

    fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                console.log('Inicio de sesión exitoso:', data);
                localStorage.setItem('token', data.token);

                loginMessage.textContent = 'Inicio de sesión exitoso. Redirigiendo...';
                loginMessage.style.color = 'green';

                // seeking who i am 
                fetch('http://localhost:3000/auth/whoami', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${data.token}`,
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(userData => {
                        setTimeout(() => {
                            if (userData.rol === 'admin') {
                                window.location.href = '../../pages/AdminPage.html';
                            } else {
                                window.location.href = '../../components/HomePage.html';
                            }
                        }, 2000);
                    })
                    .catch((error) => console.log('Error al obtener el nombre del usuario:', error));
            } else {
                console.log('Error al iniciar sesión:', data.message);
                loginMessage.textContent = 'Error al iniciar sesión: ' + data.message;
                loginMessage.style.color = 'red';
            }
        })
        .catch((error) => console.log('Error al iniciar sesión:', error));
}