/*
 * ViewToggle.jsx - Toggle de vista y botón de favoritos
 *
 * Componente que incluye:
 * - Toggle entre vista carrusel y cuadrícula
 * - Botón de favoritos con contador animado
 * - Diseño moderno con gradientes
 * - Responsive layout
 */

import "./ViewToggle.css";

const ViewToggle = ({
  currentView,
  onViewChange,
  favoritesCount,
  onShowFavorites,
}) => {
  return (
    <div className="view-toggle-container">
      <div className="view-toggle">
        <button
          className={`view-btn ${currentView === "carousel" ? "active" : ""}`}
          onClick={() => onViewChange("carousel")}
          aria-label="Vista de carrusel"
        >
          📱 Carrusel
        </button>
        <button
          className={`view-btn ${currentView === "grid" ? "active" : ""}`}
          onClick={() => onViewChange("grid")}
          aria-label="Vista de cuadrícula"
        >
          🔲 Cuadrícula
        </button>
      </div>

      <button
        className="favorites-btn"
        onClick={onShowFavorites}
        aria-label={`Ver favoritos (${favoritesCount})`}
      >
        <span className="favorites-icon">❤️</span>
        <span className="favorites-text">Favoritos</span>
        {favoritesCount > 0 && (
          <span className="favorites-count">{favoritesCount}</span>
        )}
      </button>
    </div>
  );
};

export default ViewToggle;
