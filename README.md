🧾 ServicePoint – Sistema de Venta de Licencias (Windows & Microsoft Office)

ServicePoint es una aplicación web full stack que simula un sistema de autoservicio digital para la venta de licencias de software (Windows y Microsoft Office), pensada para funcionar tanto en dispositivos móviles como de escritorio.

La aplicación reproduce el flujo real de un punto de venta autoservicio: el usuario selecciona productos, gestiona un carrito, finaliza la compra y obtiene un ticket digital descargable, mientras que los administradores cuentan con un panel de control completo para la gestión de productos, ventas y métricas del negocio.

El proyecto fue desarrollado con un enfoque profesional, priorizando:

separación de responsabilidades

arquitectura clara

experiencia de usuario

escalabilidad

lógica de negocio real

🎯 Funcionalidades principales
👤 Cliente (Autoservicio)

Pantalla de bienvenida con ingreso de nombre.

Catálogo de licencias dividido en dos categorías (Windows / Office).

Vista de productos responsive y paginada.

Cambio de tema claro / oscuro con persistencia.

Carrito de compras con gestión de cantidades.

Confirmación de compra mediante modal.

Generación de ticket digital con:

detalle de productos

nombre del cliente

fecha

Descarga del ticket en PDF.

Reinicio completo del flujo al finalizar la compra
(concepto autoservicio, no e-commerce).

Acceso directo al panel de administración.

🛠️ Administrador (Back Office)

Login con validación contra base de datos.

Contraseñas encriptadas.

Botón de acceso rápido para entorno de testing.

Dashboard con productos separados por categoría.

Alta, modificación, baja lógica y reactivación de productos.

Carga y actualización de imágenes.

Descarga de ventas en Excel.

Registro de inicios de sesión (logs).

Visualización de métricas y estadísticas.

📊 Funcionalidades avanzadas

Persistencia de ventas en base de datos.

Relación muchos a muchos entre ventas y productos.

API REST con paginación.

Validaciones mediante middlewares.

API en JSON + vistas HTML renderizadas con EJS.

Sistema de encuestas post-compra.

Estadísticas:

Top 10 productos más vendidos.

Top 10 ventas de mayor valor.

Métricas adicionales sobre ventas y logs.

🧱 Arquitectura del proyecto

El sistema está dividido en dos módulos que conviven en el mismo servidor:

🔹 Frontend

Aplicación orientada al usuario final (autoservicio).

Consumo de API REST.

Diseño responsive.

HTML, CSS y JavaScript puro.

🔹 Backend

Node.js + Express.

Arquitectura MVC.

API REST en formato JSON.

Renderizado de vistas administrativas con EJS.

ORM para el manejo de la base de datos.

Manejo de archivos (imágenes, PDFs, Excel).

🗂️ Modelos principales

Usuarios (administradores)

Productos (con estado activo / inactivo)

Ventas

DetalleVenta (relación muchos a muchos)

Encuestas

Logs de acceso

🚀 Tecnologías utilizadas

Backend

Node.js

Express

EJS

SQL + ORM

Frontend

HTML

CSS

JavaScript

Otros

Encriptación de contraseñas

Generación de PDFs

Exportación de datos a Excel

Manejo de archivos e imágenes

🧪 Enfoque en calidad

Validaciones en frontend y backend.

Manejo controlado de errores.

Navegación clara sin escribir rutas manualmente.

UX pensada para entornos reales y de testing.

Código estructurado y mantenible.

🎯 Objetivo del proyecto

ServicePoint fue desarrollado para demostrar habilidades en:

Desarrollo full stack.

Diseño de APIs REST.

Manejo de bases de datos relacionales.

Arquitectura MVC.

Desarrollo de paneles administrativos.

Pensamiento orientado a negocio y experiencia de usuario.


👨‍💻 Autor

Nicolás
Desarrollador Full Stack Jr.
Proyecto desarrollado con fines demostrativos y profesionales.

