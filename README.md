# 🎬 Movie Search App

A beautiful and modern movie search application built with React, featuring a stunning UI with glassmorphism design, smooth animations, and comprehensive movie information.

## ✨ Features

- **🎯 Smart Search**: Search for movies with real-time results
- **📱 Responsive Design**: Beautiful UI that works on all devices
- **🎨 Modern UI**: Glassmorphism design with smooth animations
- **📊 Movie Categories**: Browse Popular, Top Rated, and Upcoming movies
- **🔍 Detailed Information**: View comprehensive movie details including cast, ratings, and more
- **❤️ Favorites**: Add movies to your favorites list
- **📱 Mobile Optimized**: Touch-friendly interface for mobile devices
- **⚡ Fast Performance**: Optimized loading and smooth interactions
- **🎭 Cast Information**: View movie cast and character information
- **📈 Infinite Scroll**: Load more movies with pagination

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Framer Motion** - Smooth animations and transitions
- **Axios** - HTTP client for API requests
- **React Icons** - Beautiful icon library
- **TMDB API** - Movie database API
- **CSS3** - Modern styling with glassmorphism effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/movie-search-app.git
   cd movie-search-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the app

## 🎯 Usage

### Searching Movies
- Use the search bar in the header to find specific movies
- Search results are displayed in real-time
- Clear the search to return to browsing categories

### Browsing Categories
- **Popular**: Currently trending movies
- **Top Rated**: Highest-rated movies
- **Upcoming**: Movies releasing soon

### Movie Details
- Click on any movie card to view detailed information
- View cast information, ratings, and additional details
- Add movies to favorites or share them

### Responsive Design
- The app works seamlessly on desktop, tablet, and mobile devices
- Touch-friendly interface for mobile users
- Optimized layouts for different screen sizes

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like UI elements
- **Gradient Backgrounds**: Beautiful color gradients
- **Smooth Animations**: Framer Motion powered transitions
- **Hover Effects**: Interactive elements with hover states
- **Loading States**: Elegant loading spinners and skeletons
- **Error Handling**: User-friendly error messages

## 📱 Mobile Features

- Touch-optimized interface
- Responsive grid layouts
- Mobile-friendly navigation
- Optimized image loading
- Smooth scrolling experience

## 🔧 API Configuration

The app uses The Movie Database (TMDB) API. The API key is included for demo purposes, but for production use, you should:

1. Get your own API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Replace the API key in `src/services/api.js`
3. Consider using environment variables for security

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation and search header
│   ├── MovieCard.js    # Individual movie card
│   ├── MovieGrid.js    # Grid layout for movies
│   ├── MovieDetails.js # Detailed movie modal
│   └── *.css          # Component styles
├── services/           # API services
│   └── api.js         # TMDB API integration
├── App.js             # Main application component
├── index.js           # Application entry point
└── *.css             # Global styles
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the movie database API
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainers.

---

Made with ❤️ by [Your Name] 