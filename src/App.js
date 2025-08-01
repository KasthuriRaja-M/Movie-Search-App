import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import MovieDetails from './components/MovieDetails';
import { 
  getPopularMovies, 
  searchMovies, 
  getMovieDetails,
  getTopRatedMovies,
  getUpcomingMovies
} from './services/api';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeCategory, setActiveCategory] = useState('popular');
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Load initial movies
  useEffect(() => {
    loadMovies();
  }, [activeCategory, currentPage]);

  const loadMovies = async () => {
    setLoading(true);
    setError(null);
    
    try {
      let data;
      
      switch (activeCategory) {
        case 'popular':
          data = await getPopularMovies(currentPage);
          break;
        case 'top-rated':
          data = await getTopRatedMovies(currentPage);
          break;
        case 'upcoming':
          data = await getUpcomingMovies(currentPage);
          break;
        default:
          data = await getPopularMovies(currentPage);
      }
      
      if (currentPage === 1) {
        setMovies(data.results);
      } else {
        setMovies(prev => [...prev, ...data.results]);
      }
    } catch (err) {
      setError('Failed to load movies. Please try again.');
      console.error('Error loading movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setActiveCategory('popular');
      setCurrentPage(1);
      return;
    }

    setLoading(true);
    setError(null);
    setSearchQuery(query);
    setActiveCategory('search');
    
    try {
      const data = await searchMovies(query, 1);
      setMovies(data.results);
      setCurrentPage(1);
    } catch (err) {
      setError('Search failed. Please try again.');
      console.error('Error searching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
    setCurrentPage(1);
  };

  const handleMovieClick = async (movie) => {
    try {
      const detailedMovie = await getMovieDetails(movie.id);
      setSelectedMovie(detailedMovie);
    } catch (err) {
      console.error('Error loading movie details:', err);
      setSelectedMovie(movie); // Fallback to basic movie data
    }
  };

  const handleFavorite = (movie) => {
    setFavorites(prev => {
      const isFavorite = prev.find(fav => fav.id === movie.id);
      if (isFavorite) {
        return prev.filter(fav => fav.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  const loadMoreMovies = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="App">
      <Header 
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />
      
      <main className="main-content">
        <div className="container">
          {searchQuery && (
            <motion.div 
              className="search-results-header"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2>Search Results for "{searchQuery}"</h2>
              <p>{movies.length} movies found</p>
            </motion.div>
          )}

          <MovieGrid 
            movies={movies}
            onMovieClick={handleMovieClick}
            onFavorite={handleFavorite}
            loading={loading}
            error={error}
          />

          {movies.length > 0 && !loading && !searchQuery && (
            <motion.div 
              className="load-more-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button 
                className="btn load-more-btn"
                onClick={loadMoreMovies}
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Load More Movies'}
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <AnimatePresence>
        {selectedMovie && (
          <MovieDetails
            movie={selectedMovie}
            onClose={handleCloseDetails}
            onFavorite={handleFavorite}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 