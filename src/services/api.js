/*
 * api.js - Servicio para comunicación con la API de Rick and Morty
 *
 * Contiene todas las funciones para interactuar con la API oficial:
 * - fetchCharacters: Obtiene personajes con filtros y paginación
 * - fetchCharacterById: Obtiene un personaje específico por ID
 * - fetchMultipleCharacters: Obtiene múltiples personajes por IDs
 *
 * Todas las funciones incluyen manejo de errores y respuestas normalizadas.
 */

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (name = "", status = "", page = 1) => {
  try {
    const params = new URLSearchParams();

    if (name.trim()) {
      params.append("name", name.trim());
    }

    if (status) {
      params.append("status", status);
    }

    params.append("page", page.toString());

    const url = `${BASE_URL}/character?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        return {
          results: [],
          info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null,
          },
        };
      }
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      results: data.results || [],
      info: {
        count: data.info?.count || 0,
        pages: data.info?.pages || 0,
        next: data.info?.next || null,
        prev: data.info?.prev || null,
        currentPage: page,
      },
    };
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    throw error;
  }
};

export const fetchCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener personaje con ID ${id}:`, error);
    throw error;
  }
};

export const fetchMultipleCharacters = async (ids) => {
  try {
    const idsString = Array.isArray(ids) ? ids.join(",") : ids;
    const response = await fetch(`${BASE_URL}/character/${idsString}`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  } catch (error) {
    console.error("Error al obtener múltiples personajes:", error);
    throw error;
  }
};
