import  "./src/index.css";

const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.querySelector(".sidebar-toggle");

sidebarToggle.addEventListener("click", () => {
	sidebar.classList.toggle("collapsed");
});

