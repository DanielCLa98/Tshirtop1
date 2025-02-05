module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827", // Oscuro para fondo principal
        secondary: "#111827", // Oscuro para sidebar
        accent: "#111827", // Blanco para textos principales
        muted: "#111827", // Gris para textos secundarios
        highlight: "#111827", // Color rojo para etiquetas o precios destacados
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombras suaves
      },
    },
  },
  plugins: [],
};
