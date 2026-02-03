// =======================
// TOGGLE DARK MODE
// =======================
// - Lee preferencia desde localStorage
// - Aplica la clase "dark" al HTML
// - Guarda el tema seleccionado por el usuario

const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
}

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        html.classList.toggle("dark");

        if (html.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}
