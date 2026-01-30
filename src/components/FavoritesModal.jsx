/*
 * FavoritesModal.jsx - Modal de personajes favoritos
 *
 * Modal que muestra:
 * - Grid de todas las tarjetas de personajes favoritos
 * - Botón para limpiar todos los favoritos
 * - Estado vacío con mensaje motivacional
 * - Cierre con múltiples métodos (ESC, backdrop, botón)
 * - Animaciones de entrada/salida
 */

import { useEffect } from "react";
import CharacterCard from "./CharacterCard";
import "./FavoritesModal.css";

const FavoritesModal = ({
  isOpen,
  onClose,
  favorites,
  onCharacterClick,
  onToggleFavorite,
  isFavorite,
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="favorites-modal-backdrop" onClick={handleBackdropClick}>
      <div className="favorites-modal">
        <div className="favorites-modal-header">
          <h2 className="favorites-modal-title">
            ❤️ Mis Favoritos ({favorites.length})
          </h2>
          <button
            className="favorites-modal-close-btn"
            onClick={onClose}
            aria-label="Cerrar modal de favoritos"
          >
            ×
          </button>
        </div>

        <div className="favorites-modal-content">
          {favorites.length === 0 ? (
            <div className="no-favorites">
              <div className="no-favorites-icon">💔</div>
              <h3>No tienes favoritos aún</h3>
              <p>¡Explora los personajes y agrega algunos a tus favoritos!</p>
            </div>
          ) : (
            <div className="favorites-grid">
              {favorites.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  onClick={onCharacterClick}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={isFavorite(character.id)}
                />
              ))}
            </div>
          )}
        </div>

        {favorites.length > 0 && (
          <div className="favorites-modal-footer">
            <button
              className="clear-all-favorites-btn"
              onClick={() => {
                if (
                  window.confirm(
                    "¿Estás seguro de que quieres eliminar todos los favoritos?",
                  )
                ) {
                  favorites.forEach((character) => onToggleFavorite(character));
                }
              }}
            >
              🗑️ Limpiar todos los favoritos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;
