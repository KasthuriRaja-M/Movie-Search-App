import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaPlay, FaArrowLeft, FaHeart, FaShare } from 'react-icons/fa';
import { getBackdropUrl, getPosterUrl } from '../services/api';
import './MovieDetails.css';

const MovieDetails = ({ movie, onClose, onFavorite }) => {
  if (!movie) return null;

  const {
    title,
    overview,
    vote_average,
    vote_count,
    release_date,
    runtime,
    genres,
    backdrop_path,
    poster_path,
    budget,
    revenue,
    status,
    credits,
    videos,
  } = movie;

  const backdropUrl = getBackdropUrl(backdrop_path);
  const posterUrl = getPosterUrl(poster_path);
  const releaseYear = release_date ? new Date(release_date).getFullYear() : 'N/A';
  const rating = vote_average ? vote_average.toFixed(1) : 'N/A';
  const runtimeFormatted = runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : 'N/A';

  const handleFavoriteClick = () => {
    onFavorite && onFavorite(movie);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: `Check out ${title} (${releaseYear})`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <motion.div
      className="movie-details-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="movie-details-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="movie-details-header">
          {backdropUrl && (
            <div className="movie-backdrop">
              <img src={backdropUrl} alt={title} />
              <div className="backdrop-overlay"></div>
            </div>
          )}
          
          <button className="close-btn" onClick={onClose}>
            <FaArrowLeft />
          </button>
        </div>

        <div className="movie-details-content">
          <div className="movie-main-info">
            <div className="movie-poster-section">
              <img src={posterUrl} alt={title} className="movie-poster" />
              <div className="movie-actions">
                <motion.button
                  className="action-btn play-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay />
                  Watch
                </motion.button>
                
                <motion.button
                  className="action-btn favorite-btn"
                  onClick={handleFavoriteClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaHeart />
                  Favorite
                </motion.button>
                
                <motion.button
                  className="action-btn share-btn"
                  onClick={handleShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShare />
                  Share
                </motion.button>
              </div>
            </div>

            <div className="movie-info-section">
              <h1 className="movie-title">{title}</h1>
              
              <div className="movie-meta">
                <span className="movie-year">{releaseYear}</span>
                {genres && genres.length > 0 && (
                  <span className="movie-genres">
                    {genres.map(genre => genre.name).join(', ')}
                  </span>
                )}
                <span className="movie-runtime">{runtimeFormatted}</span>
              </div>

              <div className="movie-rating-section">
                <div className="rating">
                  <FaStar className="star-icon" />
                  <span className="rating-value">{rating}</span>
                  <span className="rating-count">({vote_count} votes)</span>
                </div>
              </div>

              {overview && (
                <div className="movie-overview">
                  <h3>Overview</h3>
                  <p>{overview}</p>
                </div>
              )}

              <div className="movie-details-grid">
                {status && (
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value">{status}</span>
                  </div>
                )}
                
                {budget > 0 && (
                  <div className="detail-item">
                    <span className="detail-label">Budget:</span>
                    <span className="detail-value">
                      ${(budget / 1000000).toFixed(1)}M
                    </span>
                  </div>
                )}
                
                {revenue > 0 && (
                  <div className="detail-item">
                    <span className="detail-label">Revenue:</span>
                    <span className="detail-value">
                      ${(revenue / 1000000).toFixed(1)}M
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {credits && credits.cast && credits.cast.length > 0 && (
            <div className="movie-cast">
              <h3>Cast</h3>
              <div className="cast-grid">
                {credits.cast.slice(0, 6).map((actor) => (
                  <div key={actor.id} className="cast-member">
                    <div className="cast-avatar">
                      {actor.profile_path ? (
                        <img 
                          src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
                          alt={actor.name} 
                        />
                      ) : (
                        <div className="no-avatar">{actor.name.charAt(0)}</div>
                      )}
                    </div>
                    <span className="cast-name">{actor.name}</span>
                    <span className="cast-character">{actor.character}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MovieDetails; 