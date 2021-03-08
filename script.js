document.addEventListener("DOMContentLoaded", function () {
	const header = document.querySelector("header");
	const hamburger = document.querySelector(".hamburguer");
	const navUL = document.querySelector(".nav-ul");
	const vacio = document.querySelector(".block-container");

	window.addEventListener("scroll", () => {
		header.classList.toggle("sticky", window.scrollY > 0);
	});

	hamburger.addEventListener("click", () => {
		navUL.classList.toggle("show");
	});

	vacio.addEventListener("click", () => {
		if (navUL.classList.contains("show")) {
			navUL.classList.toggle("show");
		}
	});
});
