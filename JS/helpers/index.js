const btn_action = document.querySelector('#cta_sesion');

btn_action.addEventListener('click', openModal);

function openModal() {
    document.getElementById("modalOverlay").style.display = "flex";
}

function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
}

function confirmLogout() {
    closeModal();
    window.location.href = "../../pages/Login.html";
    localStorage.removeItem('token')
}


 // Obtener el campo de búsqueda y la tabla
 const searchInput = document.getElementById('searchInput');
 const transactionsTable = document.getElementById('transactionsTable');
 const rows = transactionsTable.getElementsByTagName('tr');

 // Evento para filtrar las transacciones
 searchInput.addEventListener('input', function () {
   const query = searchInput.value.toLowerCase();
   
   for (let i = 1; i < rows.length; i++) { // Comienza desde 1 para evitar el encabezado
     const cells = rows[i].getElementsByTagName('td');
     let match = false;

     for (let j = 0; j < cells.length; j++) {
       const cellText = cells[j].textContent || cells[j].innerText;
       if (cellText.toLowerCase().indexOf(query) > -1) {
         match = true;
         break; // Si hay una coincidencia, no se necesita seguir buscando
       }
     }

     // Mostrar u ocultar la fila según la coincidencia con la búsqueda
     if (match) {
       rows[i].style.display = '';
     } else {
       rows[i].style.display = 'none';
     }
   }
 });