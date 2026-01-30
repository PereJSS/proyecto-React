/*
 * CharacterGrid.jsx - Vista de cuadrícula de personajes
 *
 * Componente que renderiza personajes en formato grid:
 * - Layout de cuadrícula responsive (1-5 columnas según pantalla)
 * - Utiliza CharacterCard para cada personaje
 * - Maneja estado vacío con mensaje informativo
 * - Optimizado para diferentes tamaños de pantalla
 */
/*
 * CharacterGrid.jsx - Vista de cuadrícula de personajes
 *
 * Componente que renderiza personajes en formato grid:
 * - Layout de cuadrícula responsive (1-5 columnas según pantalla)
 * - Utiliza CharacterCard para cada personaje
 * - Maneja estado vacío con mensaje informativo
 * - Optimizado para diferentes tamaños de pantalla
 */

import CharacterCard from "./CharacterCard";
import "./CharacterGrid.css";

const CharacterGrid = ({
  characters,
  onCharacterClick,
  onToggleFavorite,
  isFavorite,
}) => {
  if (characters.length === 0) {
    return (
      <div className="no-characters">
        <div className="no-characters-icon">🔍</div>
        <h3>No se encontraron personajes</h3>
        <p>Intenta ajustar los filtros de búsqueda</p>
      </div>
    );
  }

  return (
    <div className="character-grid">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={onCharacterClick}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite(character.id)}
        />
      ))}
    </div>
  );
};

export default CharacterGrid;
