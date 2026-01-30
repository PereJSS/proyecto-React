/*
 * App.jsx - Componente principal de la aplicación Rick and Morty
 *
 * Este archivo contiene la lógica principal de la aplicación que:
 * - Gestiona el estado global de personajes, búsquedas y filtros
 * - Maneja la paginación y cambios de vista (carrusel/grid)
 * - Coordina la comunicación entre todos los componentes
 * - Controla los modales de detalles y favoritos
 * - Integra SwiperJS para el carrusel de personajes
 */

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination as SwiperPagination } from "swiper/modules";
import CharacterCard from "./components/CharacterCard";
import SearchBar from "./components/SearchBar";
import CharacterModal from "./components/CharacterModal";
import CharacterGrid from "./components/CharacterGrid";
import ViewToggle from "./components/ViewToggle";
import Pagination from "./components/Pagination";
import FavoritesModal from "./components/FavoritesModal";
import { fetchCharacters } from "./services/api";
import { useFavorites } from "./hooks/useFavorites";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

function App() {
  // Estados principales
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [viewMode, setViewMode] = useState("carousel");
  const [showFavorites, setShowFavorites] = useState(false);

  // Hook personalizado para favoritos
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    favoritesCount,
  } = useFavorites();

  // Efecto para cargar personajes
  useEffect(() => {
    const loadCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCharacters(
          searchTerm,
          statusFilter,
          currentPage,
        );
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 0);
      } catch (error) {
        setError("Error al cargar los personajes");
        setCharacters([]);
        setTotalPages(0);
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [searchTerm, statusFilter, currentPage]);

  // Reset página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  const toggleFavorite = (character) => {
    if (isFavorite(character.id)) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewChange = (view) => {
    setViewMode(view);
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  const handleCloseFavorites = () => {
    setShowFavorites(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Rick and Morty Characters</h1>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
        <ViewToggle
          currentView={viewMode}
          onViewChange={handleViewChange}
          favoritesCount={favoritesCount}
          onShowFavorites={handleShowFavorites}
        />
      </header>

      <main className="app-main">
        {loading && <div className="loading">Cargando personajes...</div>}
        {error && <div className="error">{error}</div>}

        {!loading && !error && characters.length > 0 && (
          <>
            {viewMode === "carousel" ? (
              <Swiper
                modules={[Navigation, SwiperPagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                className="characters-swiper"
              >
                {characters.map((character) => (
                  <SwiperSlide key={character.id}>
                    <CharacterCard
                      character={character}
                      onClick={handleCharacterClick}
                      onToggleFavorite={toggleFavorite}
                      isFavorite={isFavorite(character.id)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <CharacterGrid
                characters={characters}
                onCharacterClick={handleCharacterClick}
                onToggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
              />
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              loading={loading}
            />
          </>
        )}

        {!loading && !error && characters.length === 0 && (
          <div className="no-results">No se encontraron personajes</div>
        )}
      </main>

      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={handleCloseModal}
          onToggleFavorite={toggleFavorite}
          isFavorite={isFavorite(selectedCharacter.id)}
        />
      )}

      <FavoritesModal
        isOpen={showFavorites}
        onClose={handleCloseFavorites}
        favorites={favorites}
        onCharacterClick={handleCharacterClick}
        onToggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}

export default App;
