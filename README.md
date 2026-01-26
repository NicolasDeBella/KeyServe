# 🧾 KeyServe
### Sistema de Venta de Licencias — *Windows & Microsoft Office*

> Aplicación web **full stack** que simula un **punto de venta autoservicio digital** para la comercialización de licencias de software Microsoft, replicando flujos reales de negocio, validación y administración.

---

## 📌 Descripción general

**KeyServe** es una aplicación web pensada para funcionar tanto en **dispositivos móviles como de escritorio**, que reproduce el flujo completo de un **kiosco de autoservicio**:

- selección de productos  
- gestión de carrito  
- confirmación de compra  
- generación de ticket digital  
- administración y métricas del negocio  

El sistema cuenta con una **interfaz de cliente** y un **panel administrativo**, integrados en una solución coherente y escalable.

---

## 🧠 Enfoque del proyecto

El desarrollo prioriza principios utilizados en entornos reales:

- ✅ Separación de responsabilidades  
- ✅ Arquitectura clara y mantenible  
- ✅ Experiencia de usuario (UX)  
- ✅ Escalabilidad  
- ✅ Lógica de negocio real  

---

## 🎯 Funcionalidades principales

### 👤 Cliente — *Autoservicio*

- Pantalla de bienvenida con ingreso de nombre.
- Catálogo de licencias separado por categorías (**Windows / Office**).
- Vista de productos **responsive** y **paginada**.
- Cambio de **tema claro / oscuro** con persistencia.
- Carrito de compras con gestión de cantidades.
- Confirmación de compra mediante modal.
- Generación de **ticket digital** con:
  - detalle de productos  
  - nombre del cliente  
  - fecha de compra  
- Descarga del ticket en **PDF**.
- Reinicio completo del flujo al finalizar la compra  
  *(concepto de autoservicio, no e-commerce tradicional)*.
- Acceso directo al panel de administración.

---

### 🛠️ Administrador — *Back Office*

- Login con validación contra base de datos.
- Contraseñas **encriptadas**.
- Acceso rápido para entorno de testing.
- Dashboard con productos separados por categoría.
- **ABM de productos**:
  - alta  
  - modificación  
  - baja lógica  
  - reactivación  
- Carga y actualización de imágenes.
- Descarga de ventas en **Excel**.
- Registro de inicios de sesión (**logs**).
- Visualización de métricas y estadísticas.

---

## 📊 Funcionalidades avanzadas

- Persistencia de ventas en base de datos.
- Relación **muchos a muchos** entre ventas y productos.
- API REST con **paginación**.
- Validaciones mediante **middlewares**.
- API JSON + vistas administrativas renderizadas con **EJS**.
- Sistema de encuestas post-compra.
- Estadísticas:
  - Top 10 productos más vendidos.
  - Top 10 ventas de mayor valor.
  - Métricas adicionales sobre ventas y accesos.

---

## 🧱 Arquitectura del proyecto

El sistema está dividido en dos módulos que conviven en el mismo servidor:

### 🔹 Frontend
- Aplicación orientada al usuario final (autoservicio).
- Consumo de API REST.
- Diseño responsive.
- **HTML, CSS y JavaScript puro**.

### 🔹 Backend
- **Node.js + Express**.
- Arquitectura **MVC**.
- API REST en formato JSON.
- Renderizado de vistas administrativas con **EJS**.
- ORM para el manejo de la base de datos.
- Manejo de archivos:
  - imágenes  
  - PDFs  
  - archivos Excel  

---

## 🗂️ Modelos principales

- Usuarios (administradores)
- Productos (estado activo / inactivo)
- Ventas
- DetalleVenta *(relación muchos a muchos)*
- Encuestas
- Logs de acceso

---

## 🚀 Tecnologías utilizadas

### Backend
- Node.js  
- Express  
- EJS  
- SQL + ORM  

### Frontend
- HTML  
- CSS  
- JavaScript  

### Otros
- Encriptación de contraseñas
- Generación de PDFs
- Exportación de datos a Excel
- Manejo de archivos e imágenes

---

## 🧪 Enfoque en calidad

- Validaciones en frontend y backend.
- Manejo controlado de errores.
- Navegación clara (sin escribir rutas manualmente).
- UX pensada para:
  - entornos reales  
  - entornos de testing  
- Código estructurado y mantenible.

---

## 🎯 Objetivo del proyecto

**ServicePoint** fue desarrollado con fines **demostrativos y profesionales**, para evidenciar habilidades en:

- Desarrollo **full stack**.
- Diseño de **APIs REST**.
- Manejo de **bases de datos relacionales**.
- Arquitectura **MVC**.
- Desarrollo de **paneles administrativos**.
- Pensamiento orientado a negocio y experiencia de usuario.

---

## 👨‍💻 Autor

**Nicolás**  
Desarrollador Full Stack Jr.  

