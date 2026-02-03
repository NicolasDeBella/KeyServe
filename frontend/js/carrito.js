// =======================
// ESTADO GLOBAL
// =======================

// Carrito guardado en localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Usuario logueado (sessionStorage)
const usuario = sessionStorage.getItem("nombreUsuario");

// =======================
// ELEMENTOS DEL DOM
// =======================

const btnInicio = document.getElementById("btn-inicio");
const btnFinalizar = document.getElementById("btn-finalizar");

const carritoBody = document.getElementById("carrito-body");
const resumenTotal = document.getElementById("resumen-total");
const ordenTotal = document.getElementById("orden-total");

// =======================
// SEGURIDAD USUARIO
// =======================

// Verifica que haya un usuario logueado
function verificarUsuario() {
    if (!usuario) {
        window.location.href = "index.html";
    }
}

// =======================
// RENDER CARRITO
// =======================

// Dibuja los productos del carrito en la tabla
function renderCarrito() {
    carritoBody.innerHTML = "";

    // Carrito vacío
    if (carrito.length === 0) {
        carritoBody.innerHTML = `
            <tr>
                <td colspan="4" class="text-center py-8 text-gray-400">
                    Tu carrito está vacío
                </td>
            </tr>
        `;
        resumenTotal.textContent = "$0";
        ordenTotal.textContent = "$0.00";
        return;
    }

    let subtotal = 0;

    carrito.forEach(prod => {
        const sub = prod.precio * prod.cantidad;
        subtotal += sub;

        carritoBody.innerHTML += `
            <tr class="group hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors">
                <td class="px-6 py-6">
                    <div class="flex items-center gap-4">
                        <img src="${prod.imagen_url}" class="w-12 h-12 object-contain" />
                        <div>
                            <p class="font-bold">${prod.nombre}</p>
                            <p class="text-xs text-gray-400">${prod.categoria}</p>
                        </div>
                    </div>
                </td>

                <td class="px-6 py-6 text-center">
                    ${prod.cantidad}
                </td>

                <td class="px-6 py-6 text-right font-bold">
                    $${sub.toFixed(2)}
                </td>

                <td class="px-6 py-6 text-center">
                    <button onclick="eliminarProducto(${prod.id})"
                        class="text-gray-300 hover:text-red-500">
                        🗑
                    </button>
                </td>
            </tr>
        `;
    });

    resumenTotal.textContent = `$${subtotal.toFixed(2)}`;
    ordenTotal.textContent = `$${subtotal.toFixed(2)}`;
}

// =======================
// ACCIONES DEL CARRITO
// =======================

// Elimina o reduce cantidad de un producto
function eliminarProducto(id) {
    const producto = carrito.find(p => p.id === id);
    if (!producto) return;

    if (producto.cantidad > 1) {
        producto.cantidad--;
    } else {
        carrito = carrito.filter(p => p.id !== id);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

// =======================
// NAVEGACIÓN
// =======================

// Volver al catálogo
document
    .getElementById("btn-continuar-comprando")
    .addEventListener("click", () => {
        window.location.href = "catalogo.html";
    });

// =======================
// FINALIZAR COMPRA
// =======================

// Muestra el modal de confirmación
btnFinalizar.addEventListener("click", () => {
    if (carrito.length === 0) return;
    document
        .getElementById("confirmation-modal")
        .classList.remove("hidden");
});

// Descarga la factura en PDF
document
    .getElementById("btn-descargar-factura")
    .addEventListener("click", async () => {

        const total = carrito.reduce(
            (acc, prod) => acc + prod.precio * prod.cantidad,
            0
        );

        const response = await fetch(
            "http://localhost:3000/api/pedidos/factura",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ usuario, carrito, total }),
            }
        );

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    });

// =======================
// INIT
// =======================

// Inicialización de la vista
document.addEventListener("DOMContentLoaded", () => {
    verificarUsuario();
    renderCarrito();
});
