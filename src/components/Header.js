import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaFilm, FaStar, FaCalendar } from 'react-icons/fa';
import './Header.css';

const Header = ({ onSearch, onCategoryChange, activeCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const categories = [
    { id: 'popular', label: 'Popular', icon: <FaFilm /> },
    { id: 'top-rated', label: 'Top Rated', icon: <FaStar /> },
    { id: 'upcoming', label: 'Upcoming', icon: <FaCalendar /> },
  ];

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilm className="logo-icon" />
            <h1>MovieSearch</h1>
          </motion.div>

          <form className="search-form" onSubmit={handleSearch}>
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            <motion.button
              type="submit"
              className="search-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </motion.button>
          </form>

          <nav className="nav-categories">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`nav-category ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => onCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                <span>{category.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 