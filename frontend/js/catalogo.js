// =======================
// ESTADO GLOBAL
// =======================

// Productos obtenidos desde el backend
let productosBackend = [];

// Carrito persistido en localStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// =======================
// ELEMENTOS DEL DOM
// =======================

const contenedorProductos = document.getElementById("seccion-productos");
const btnInicio = document.getElementById("btn-inicio");

// =======================
// SEGURIDAD USUARIO
// =======================

// Verifica que haya un usuario logueado
function verificarUsuario() {
    const nombreUsuario = sessionStorage.getItem("nombreUsuario");
    if (!nombreUsuario) {
        window.location.href = "index.html";
    }
}

// =======================
// CARGA DE PRODUCTOS
// =======================

// Obtiene productos desde el backend
async function cargarProductos() {
    try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Error al obtener productos");
        }

        productosBackend = data.payload;

        // Vista inicial
        filtrarPorCategoria("windows");

    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

// =======================
// RENDER DE PRODUCTOS
// =======================

// Muestra productos en la grilla
function mostrarProductos(productos) {
    contenedorProductos.innerHTML = "";

    productos.forEach(prod => {
        if (prod.estado !== 1) return;

        contenedorProductos.innerHTML += `
            <div class="bg-white dark:bg-background-dark/60 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                <img src="${prod.imagen_url}" alt="${prod.nombre}" class="w-full object-contain">

                <div class="p-6 space-y-3">
                    <h3 class="font-bold text-lg">${prod.nombre}</h3>

                    <p class="text-sm text-gray-500 dark:text-gray-400 h-20 overflow-y-auto">
                        ${prod.descripcion}
                    </p>

                    <button
                        onclick="agregarAlCarrito(${prod.id})"
                        class="w-full bg-primary text-white py-3 rounded-xl font-bold hover:scale-[1.02] transition-all"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </div>
        `;
    });
}

// =======================
// FILTRO POR CATEGORÍA
// =======================

// Filtra productos según categoría
function filtrarPorCategoria(categoria) {
    const categoriaNormalizada = categoria.toLowerCase();

    const productosFiltrados = productosBackend.filter(prod =>
        prod.categoria?.trim().toLowerCase() === categoriaNormalizada
    );

    mostrarProductos(productosFiltrados);
}

// =======================
// TABS DE CATEGORÍAS
// =======================

// Activa el tab seleccionado
function activarTab(tabActivoId) {
    const tabs = ["tab-windows", "tab-office"];

    tabs.forEach(id => {
        document
            .getElementById(id)
            .classList.remove("border-b-[3px]", "border-primary", "text-primary");
    });

    document
        .getElementById(tabActivoId)
        .classList.add("border-b-[3px]", "border-primary", "text-primary");
}

// =======================
// NAVEGACIÓN
// =======================

// Navega al carrito
document
    .getElementById("btn-ver-carrito")
    .addEventListener("click", () => {
        window.location.href = "carrito.html";
    });

// =======================
// EVENTOS DE FILTRO
// =======================

document
    .getElementById("tab-windows")
    .addEventListener("click", () => {
        filtrarPorCategoria("windows");
        activarTab("tab-windows");
    });

document
    .getElementById("tab-office")
    .addEventListener("click", () => {
        filtrarPorCategoria("office");
        activarTab("tab-office");
    });

// =======================
// LÓGICA DE CARRITO
// =======================

// Agrega un producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productosBackend.find(p => p.id === idProducto);
    if (!producto) return;

    const productoEnCarrito = carrito.find(p => p.id === idProducto);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarBadgeCarrito();
}

// =======================
// BADGE CARRITO
// =======================

// Actualiza el contador visual del carrito
function actualizarBadgeCarrito() {
    const badge = document.getElementById("badge-carrito");
    if (!badge) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const cantidadTotal = carrito.reduce(
        (acc, prod) => acc + prod.cantidad,
        0
    );

    badge.textContent = cantidadTotal;

    if (cantidadTotal === 0) {
        badge.classList.add("hidden");
    } else {
        badge.classList.remove("hidden");
    }
}

// =======================
// INIT
// =======================

// Inicialización de la vista
document.addEventListener("DOMContentLoaded", () => {
    verificarUsuario();
    cargarProductos();
    actualizarBadgeCarrito();
});
