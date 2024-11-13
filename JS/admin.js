// add hover to selected element, si axel me redimi, me gusta el frontend
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
function loadContent(url, elementId) {
	fetch(url)
		.then(response => response.json())
		.then(data => {
			let content = '<h1>Clientes</h1><table class="styled-table"><thead><tr><td>ID</td><td>Usuario</td><td>Nombre Apellido</td><td>DUI</td><td>Banco</td><td>Tarjeta Digital</td><td>Número de Cuenta</td></tr></thead><tbody>';
			data.forEach(cliente => {
				content += `<tr><td>${cliente.id}</td><td>${cliente.usuario}</td><td>${cliente.nombre}</td><td>${cliente.dui}</td><td>${cliente.banco}</td><td>${cliente.tarjeta}</td><td>${cliente.cuenta}</td></tr>`;
			});
			content += '</tbody></table>';
			document.getElementById(elementId).innerHTML = content;
		})
		.catch(error => console.error('Error:', error));
}

// Cargar contenido de Clientes al iniciar la página
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('clientes-link').click();
});

// give functionality to side bar 
document.getElementById('clientes-link').addEventListener('click', function (event) {
	event.preventDefault();
	loadContent('https://api.example.com/clientes', 'content');
});

document.getElementById('tarjetas-link').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('content').innerHTML = '<h1>Tarjetas</h1><p>Contenido de Tarjetas...</p>';
});

document.getElementById('movimientos-link').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('content').innerHTML = '<h1>Movimientos</h1><p>Contenido de Movimientos...</p>';
});

document.getElementById('salir-link').addEventListener('click', function (event) {
	event.preventDefault();
	document.getElementById('content').innerHTML = '<h1>Salir</h1><p>Contenido de Salir...</p>';
});
