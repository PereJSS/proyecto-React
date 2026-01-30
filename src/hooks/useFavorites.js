/*
 * useFavorites.js - Hook personalizado para gestión de favoritos
 *
 * Proporciona funcionalidad completa para manejar personajes favoritos:
 * - Persistencia automática en localStorage
 * - Funciones para agregar/quitar favoritos
 * - Verificación de estado de favorito
 * - Contador de favoritos
 * - Función de toggle para alternar estado
 *
 * El hook se sincroniza automáticamente con localStorage.
 */
import { useState, useEffect } from "react";

const FAVORITES_KEY = "rickAndMortyFavorites";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const storedFavorites = localStorage.getItem(FAVORITES_KEY);
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Error al cargar favoritos desde localStorage:", error);
      return [];
    }
  });

  // Efecto para guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error al guardar favoritos en localStorage:", error);
    }
  }, [favorites]);

  const addToFavorites = (character) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((fav) => fav.id === character.id);
      if (isAlreadyFavorite) {
        return prev;
      }
      return [...prev, character];
    });
  };

  const removeFromFavorites = (characterId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== characterId));
  };

  const isFavorite = (characterId) => {
    return favorites.some((fav) => fav.id === characterId);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const toggleFavorite = (character) => {
    if (isFavorite(character.id)) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearFavorites,
    toggleFavorite,
    favoritesCount: favorites.length,
  };
};
