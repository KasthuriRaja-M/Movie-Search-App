import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPlay, FaHeart } from 'react-icons/fa';
import { getPosterUrl } from '../services/api';
import './MovieCard.css';

const MovieCard = ({ movie, onClick, onFavorite }) => {
  const {
    id,
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
    genre_ids,
  } = movie;

  const posterUrl = getPosterUrl(poster_path);
  const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';
  const rating = vote_average ? vote_average.toFixed(1) : 'N/A';

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onFavorite && onFavorite(movie);
  };

  return (
    <motion.div
      className="movie-card"
      onClick={() => onClick(movie)}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="movie-poster">
        {posterUrl ? (
          <img src={posterUrl} alt={title} />
        ) : (
          <div className="no-poster">
            <FaPlay />
            <span>No Image</span>
          </div>
        )}
        
        <div className="movie-overlay">
          <motion.button
            className="favorite-btn"
            onClick={handleFavoriteClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaHeart />
          </motion.button>
          
          <motion.button
            className="play-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPlay />
          </motion.button>
        </div>

        <div className="movie-rating">
          <FaStar />
          <span>{rating}</span>
        </div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title" title={title}>
          {title}
        </h3>
        <p className="movie-year">{releaseYear}</p>
        
        {overview && (
          <p className="movie-overview" title={overview}>
            {overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default MovieCard; 