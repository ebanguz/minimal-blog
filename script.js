window.addEventListener("scroll", () => {
	const header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
});

const hamburger = document.querySelector(".hamburguer");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
	navUL.classList.toggle("show");
});

const vacio = document.querySelector(".block-container");

vacio.addEventListener("click", () => {
	if (navUL.classList.contains("show")) {
		navUL.classList.toggle("show");
	}
});
