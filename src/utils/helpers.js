/**
 * helpers.js - Funciones utilitarias y helpers generales
 *
 * Contiene funciones auxiliares reutilizables:
 * - debounce: Retrasa la ejecución de funciones para optimizar rendimiento
 * - truncateText: Corta texto con puntos suspensivos (útil para nombres largos)
 *
 * Funciones eliminadas: formatDate, getStatusInSpanish, getGenderInSpanish (no utilizadas)
 */

let timeoutId;

export const debounce = (func, delay) => {
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
