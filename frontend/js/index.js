// =======================
// LIMPIEZA DE SESIÓN
// =======================
// Al entrar al index se borra sesión previa
sessionStorage.removeItem("nombreUsuario");
localStorage.removeItem("carrito");

// =======================
// INIT
// =======================
document.addEventListener("DOMContentLoaded", () => {

    // =======================
    // ELEMENTOS DOM
    // =======================
    const btnIngresar = document.getElementById("btnIngresar");
    const inputNombre = document.querySelector("input[type='text']");

    if (!btnIngresar || !inputNombre) {
        console.error("No se encontraron los elementos necesarios");
        return;
    }

    // =======================
    // EVENTO INGRESAR
    // =======================
    btnIngresar.addEventListener("click", () => {
        const nombreUsuario = inputNombre.value.trim();

        if (nombreUsuario === "") {
            alert("Por favor, ingresá tu nombre");
            return;
        }

        // Guardar nombre de usuario
        sessionStorage.setItem("nombreUsuario", nombreUsuario);

        // Redirigir al catálogo
        window.location.href = "catalogo.html";
    });

    // =======================
    // ENTER PARA INGRESAR
    // =======================
    inputNombre.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            btnIngresar.click();
        }
    });

});
