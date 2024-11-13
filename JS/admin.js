// add hover to selected element
let list = document.querySelectorAll(".navigation li");

function activeLink() {
	list.forEach((item) => {
		item.classList.remove("hovered");
	});
	this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
	navigation.classList.toggle("active");
	main.classList.toggle("active");
};

// Función para cargar contenido desde una API
async function loadContent(url, elementId) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		let content = '<h1>Clientes</h1><table class="styled-table"><thead><tr><td>ID</td><td>Usuario</td><td>Nombre Apellido</td><td>DUI</td><td>Banco</td><td>Tarjeta Digital</td><td>Número de Cuenta</td></tr></thead><tbody>';
		data.forEach(cliente => {
			content += `<tr><td>${cliente.id}</td><td>${cliente.username}</td><td>${cliente.name}</td><td>${cliente.email}</td><td>${cliente.company.name}</td><td>${cliente.phone}</td><td>${cliente.website}</td></tr>`;
		});
		content += '</tbody></table>';
		document.getElementById(elementId).innerHTML = content;
	} catch (error) {
		console.error('Error:', error);
	}
}

// Cargar contenido de Clientes al iniciar la página
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('clientes-link').click();
});

// give functionality to side bar 
document.querySelectorAll('.navigation li a').forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		document.querySelectorAll('.navigation li').forEach(item => item.classList.remove('hovered'));
		this.parentElement.classList.add('hovered');

		if (this.id === 'clientes-link') {
			loadContent('https://jsonplaceholder.typicode.com/users', 'content');
		} else if (this.id === 'tarjetas-link') {
			document.getElementById('content').innerHTML = '<h1>Tarjetas</h1><p>Contenido de Tarjetas...</p>';
		} else if (this.id === 'movimientos-link') {
			document.getElementById('content').innerHTML = '<h1>Movimientos</h1><p>Contenido de Movimientos...</p>';
		} else if (this.id === 'salir-link') {
			// remove token
			localStorage.removeItem('token');
			window.location.href = '../pages/Login.html';
		}
	});
});