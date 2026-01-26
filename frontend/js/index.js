// Limpiar nombre anterior al entrar al index
sessionStorage.removeItem("nombreUsuario");

document.addEventListener("DOMContentLoaded", () => {
    const btnIngresar = document.getElementById("btnIngresar");
    const inputNombre = document.querySelector("input[type='text']");

    if (!btnIngresar || !inputNombre) {
        console.error("No se encontraron los elementos necesarios");
        return;
    }

    btnIngresar.addEventListener("click", () => {
        const nombreUsuario = inputNombre.value.trim();

        if (nombreUsuario === "") {
            alert("Por favor, ingresá tu nombre");
            return;
        }

        // Guardar nombre
        sessionStorage.setItem("nombreUsuario", nombreUsuario);

        // Redirigir
        window.location.href = "catalogo.html";
    });
});
