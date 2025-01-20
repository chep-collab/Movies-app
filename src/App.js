import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Home from './components/Home';
import StreamBuy from './components/StreamBuy';
import ComingSoon from './components/ComingSoon';
import Catalog from './components/Catalog';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import MovieDetails from './components/MovieDetails';
import MovieSearch from './components/MovieSearch'; // Import MovieSearch
import axios from 'axios';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=9346dda45797685183020b41bacc2d54`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/search" element={<MovieSearch />} /> {/* Add this route */}
          <Route path="/stream-buy" element={<StreamBuy />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/catalog" element={<Catalog movies={movies} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// Wrap App with ThemeProvider
export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}


