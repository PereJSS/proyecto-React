/*
 * CharacterCard.jsx - Tarjeta individual de personaje
 *
 * Componente reutilizable que muestra:
 * - Imagen del personaje con botón de favorito
 * - Nombre, estado y especie
 * - Información básica (género, origen, ubicación)
 * - Interactividad: click para modal y toggle de favoritos
 * - Diseño responsive con hover effects
 */

import "./CharacterCard.css";

const CharacterCard = ({
  character,
  onClick,
  onToggleFavorite,
  isFavorite,
}) => {
  const handleCardClick = () => {
    onClick(character);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
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
    <div className="character-card" onClick={handleCardClick}>
      <div className="character-image-container">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
        <button
          className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
          onClick={handleFavoriteClick}
          aria-label={
            isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
          }
        >
          ❤️
        </button>
      </div>

      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <div className="character-status">
          <span
            className="status-indicator"
            style={{ backgroundColor: getStatusColor(character.status) }}
          ></span>
          <span>
            {character.status} - {character.species}
          </span>
        </div>
        <div className="character-details">
          <p>
            <strong>Género:</strong> {character.gender}
          </p>
          <p>
            <strong>Origen:</strong> {character.origin?.name || "Desconocido"}
          </p>
          <p>
            <strong>Ubicación:</strong>{" "}
            {character.location?.name || "Desconocida"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
