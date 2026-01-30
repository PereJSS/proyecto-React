/*
 * CharacterModal.jsx - Modal de detalles del personaje
 *
 * Modal que muestra información detallada:
 * - Imagen grande del personaje
 * - Toda la información disponible (nombre, estado, tipo, origen, etc.)
 * - Botón de favorito integrado
 * - Cierre con ESC, click fuera o botón X
 * - Diseño responsive con animaciones
 */

import { useEffect } from "react";
import "./CharacterModal.css";

const CharacterModal = ({
  character,
  onClose,
  onToggleFavorite,
  isFavorite,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFavoriteClick = () => {
    onToggleFavorite(character);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "#55cc44";
      case "dead":
        return "#d63d2e";
      default:
        return "#9e9e9e";
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="character-modal">
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>

        <div className="modal-content">
          <div className="modal-image-section">
            <img
              src={character.image}
              alt={character.name}
              className="modal-character-image"
            />
            <button
              className={`modal-favorite-btn ${isFavorite ? "favorited" : ""}`}
              onClick={handleFavoriteClick}
              aria-label={
                isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
              }
            >
              {isFavorite ? "💖" : "🤍"}{" "}
              {isFavorite ? "En favoritos" : "Agregar a favoritos"}
            </button>
          </div>

          <div className="modal-info-section">
            <h2 className="modal-character-name">{character.name}</h2>

            <div className="modal-status">
              <span
                className="modal-status-indicator"
                style={{ backgroundColor: getStatusColor(character.status) }}
              ></span>
              <span>
                {character.status} - {character.species}
              </span>
            </div>

            <div className="modal-details">
              <div className="detail-row">
                <strong>Género:</strong>
                <span>{character.gender}</span>
              </div>

              <div className="detail-row">
                <strong>Tipo:</strong>
                <span>{character.type || "No especificado"}</span>
              </div>

              <div className="detail-row">
                <strong>Origen:</strong>
                <span>{character.origin?.name || "Desconocido"}</span>
              </div>

              <div className="detail-row">
                <strong>Ubicación actual:</strong>
                <span>{character.location?.name || "Desconocida"}</span>
              </div>

              <div className="detail-row">
                <strong>Creado:</strong>
                <span>
                  {new Date(character.created).toLocaleDateString("es-ES")}
                </span>
              </div>

              <div className="detail-row">
                <strong>Episodios:</strong>
                <span>{character.episode?.length || 0} episodios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
