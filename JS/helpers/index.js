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
    window.location.href = "Login.html";
}