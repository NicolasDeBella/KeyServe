//======================
// EVENTO BOTON INICIO
//======================
document.addEventListener("DOMContentLoaded", () => {
    const btnInicio = document.getElementById("btn-inicio");

    if (!btnInicio) return;

    btnInicio.addEventListener("click", () => {
        const confirmar = confirm(
            "¿Seguro que querés volver al inicio?\nSe perderán los datos del carrito."
        );

        if (confirmar) {
            localStorage.removeItem("carrito");
            window.location.href = "index.html";
        }
    });
});
