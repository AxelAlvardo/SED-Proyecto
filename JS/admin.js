// add hover to selected element, si axel me redimi, me gusta el frontend
let list = document.querySelectorAll(".navigation li");

function activeLink() {
	list.forEach(item => {
		item.classList.remove("hovered");
	})
	this.classList.add("hovered");
}

list.forEach(item => item.addEventListener("mouseover"));