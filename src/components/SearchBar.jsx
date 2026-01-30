/*
 * SearchBar.jsx - Barra de búsqueda y filtros
 *
 * Componente que proporciona:
 * - Input de búsqueda por nombre de personaje
 * - Select para filtrar por estado (vivo/muerto/desconocido)
 * - Botón para limpiar todos los filtros
 * - Diseño responsive con gradientes
 */

import "./SearchBar.css";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
  };

  return (
    <div className="search-bar">
      <div className="search-inputs">
        <div className="search-group">
          <label htmlFor="search-input">Buscar personaje:</label>
          <input
            id="search-input"
            type="text"
            placeholder="Escribe el nombre del personaje..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label htmlFor="status-filter">Filtrar por estado:</label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={handleStatusChange}
            className="status-filter"
          >
            <option value="">Todos</option>
            <option value="alive">Vivo</option>
            <option value="dead">Muerto</option>
            <option value="unknown">Desconocido</option>
          </select>
        </div>

        <button
          onClick={clearFilters}
          className="clear-filters-btn"
          type="button"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
