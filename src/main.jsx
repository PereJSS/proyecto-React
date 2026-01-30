/*
 * main.jsx - Punto de entrada de la aplicación React
 *
 * Archivo de inicialización que:
 * - Configura el root de React en modo StrictMode
 * - Monta el componente App en el DOM
 * - Importa los estilos base globales
 * - Configuración creada por Vite
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
