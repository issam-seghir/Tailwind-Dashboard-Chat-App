import  "./src/index.css";

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
	sidebar.classList.toggle("collapsed");
});

const darkModeToggle = document.getElementById("darkmode-toggle");

darkModeToggle.addEventListener("change", function () {
	if (this.checked) {
		applyDarkModeStyles();
	} else {
		removeDarkModeStyles();
	}
});

function applyDarkModeStyles() {
	document.documentElement.classList.add("dark");
}

function removeDarkModeStyles() {
	document.documentElement.classList.remove("dark");
}
