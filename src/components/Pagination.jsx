/*
 * Pagination.jsx - Componente de paginación
 *
 * Proporciona navegación entre páginas con:
 * - Botones anterior/siguiente
 * - Números de página dinámicos
 * - Puntos suspensivos para rangos grandes
 * - Estados deshabilitados para límites
 * - Responsive design
 */

import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange, loading }) => {
  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== "..." && page !== currentPage && !loading) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1 && !loading) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !loading) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className={`pagination-btn ${currentPage === 1 || loading ? "disabled" : ""}`}
        onClick={handlePrevious}
        disabled={currentPage === 1 || loading}
      >
        ← Anterior
      </button>

      <div className="pagination-pages">
        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            className={`pagination-page ${page === currentPage ? "active" : ""} ${page === "..." ? "dots" : ""}`}
            onClick={() => handlePageClick(page)}
            disabled={page === "..." || loading}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className={`pagination-btn ${currentPage === totalPages || loading ? "disabled" : ""}`}
        onClick={handleNext}
        disabled={currentPage === totalPages || loading}
      >
        Siguiente →
      </button>
    </div>
  );
};

export default Pagination;
