import React from 'react';
import { motion } from 'framer-motion';
import MovieCard from './MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movies, onMovieClick, onFavorite, loading, error }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <p>Please try again later.</p>
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="no-results">
        <h2>No movies found</h2>
        <p>Try searching for something else or browse our popular movies.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="movie-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {movies.map((movie, index) => (
        <motion.div
          key={movie.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            staggerChildren: 0.1
          }}
        >
          <MovieCard
            movie={movie}
            onClick={onMovieClick}
            onFavorite={onFavorite}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MovieGrid; 