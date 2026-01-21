# ServicePoint

**ServicePoint** es una aplicación web full stack que simula un sistema de autoservicio moderno, diseñada para funcionar tanto en dispositivos móviles como de escritorio. Permite a los usuarios seleccionar productos, gestionar un carrito de compra y obtener un ticket digital, mientras que los administradores cuentan con un panel de control para la gestión integral de productos, ventas y métricas del negocio.

El proyecto fue desarrollado con un enfoque **profesional**, priorizando buenas prácticas de arquitectura, separación de responsabilidades, experiencia de usuario y escalabilidad. Está pensado como una **solución real** que podría ser utilizada por una empresa que desee digitalizar su punto de venta en formato autoservicio.

---

## 🧩 Características principales

### 👤 Cliente (Autoservicio)

* Pantalla de bienvenida con ingreso de nombre.
* Catálogo de productos dividido en dos categorías.
* Vista de productos responsive, paginada y con cambio de tema (claro / oscuro persistente).
* Carrito de compras con gestión de cantidades.
* Confirmación de compra mediante modal.
* Generación de ticket con detalle de compra, fecha y nombre del cliente.
* Descarga del ticket en PDF.
* Reinicio del flujo al finalizar la compra (concepto autoservicio, no e-commerce).
* Acceso directo al panel de administración.

### 🛠️ Administrador (Back Office)

* Login con validación contra base de datos (contraseñas encriptadas).
* Botón de acceso rápido para entorno de testing.
* Dashboard con listado de productos por categoría.
* Alta, baja lógica, reactivación y modificación de productos.
* Carga y actualización de imágenes de productos.
* Descarga de ventas en formato Excel.
* Registro de inicios de sesión (logs).

### 📊 Funcionalidades avanzadas

* Persistencia de ventas con relación muchos a muchos entre productos y ventas.
* Paginación de productos vía API.
* Validaciones de datos mediante middlewares.
* API REST en JSON + vistas HTML renderizadas con EJS.
* Sistema de encuestas post-compra (opinión del cliente, rating, imagen, etc.).
* Estadísticas para administradores:

  * Top 10 productos más vendidos.
  * Top 10 ventas de mayor valor.
  * Métricas adicionales sobre ventas, productos y logs.

---

## 🧱 Arquitectura

El proyecto está dividido en dos grandes módulos que conviven en el mismo servidor:

* **Frontend**

  * Aplicación orientada al usuario final (autoservicio).
  * Consumo de API REST.
  * Diseño responsive.

* **Backend (Node.js + Express)**

  * API REST en formato JSON.
  * Renderizado de vistas HTML con EJS para el panel administrador.
  * Arquitectura MVC.
  * ORM para el manejo de la base de datos.

---

## 🗂️ Modelos principales

* **Usuarios** (administradores)
* **Productos** (con estado activo/inactivo)
* **Ventas**
* **DetalleVenta** (relación muchos a muchos)
* **Encuestas**
* **Logs de acceso**

---

## 🧪 Enfoque en calidad

* Validación de datos en frontend y backend.
* Manejo de errores controlado.
* Navegación clara sin necesidad de escribir rutas manualmente.
* UX pensada para entornos de prueba y uso real.

---

## 🚀 Tecnologías utilizadas

* **Backend:** Node.js, Express, EJS
* **Base de datos:** SQL + ORM
* **Frontend:** HTML, CSS, JavaScript
* **Otros:**

  * Encriptación de contraseñas
  * Generación de PDF
  * Exportación de datos a Excel
  * Manejo de archivos (imágenes)

---

## 🎯 Objetivo del proyecto

ServicePoint fue desarrollado como un **proyecto integral** para demostrar habilidades en:

* Desarrollo full stack.
* Diseño de APIs REST.
* Manejo de bases de datos relacionales.
* Arquitectura MVC.
* Desarrollo de interfaces administrativas.
* Pensamiento orientado a negocio y experiencia de usuario.

Es un proyecto ideal para mostrar en entrevistas técnicas, ya que combina lógica de negocio, frontend, backend y persistencia de datos en una solución coherente y realista.

---

## 📌 Posibles mejoras futuras

* Autenticación con roles.
* Historial de compras por cliente.
* Internacionalización (i18n).
* Tests automatizados.
* Deploy en entorno productivo.

---

👨‍💻 **Autor:** Nicolas

Proyecto full stack desarrollado en Node.js con fines demostrativos y profesionales.
