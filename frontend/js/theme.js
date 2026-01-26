const toggleBtn = document.getElementById("themeToggle");
const html = document.documentElement;


if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
