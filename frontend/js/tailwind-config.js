// =======================
// TAILWIND CONFIG
// =======================
// - Dark mode por clase
// - Colores personalizados
// - Tipografía principal
// - Bordes redondeados custom

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#19a6b3",
                "background-light": "#fafafa",
                "background-dark": "#17191c",
            },
            fontFamily: {
                display: ["Manrope", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },
        },
    },
};
