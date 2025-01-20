import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';


const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h1>MovieApp</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stream-buy">Stream/Buy</Link></li>
        <li><Link to="/coming-soon">Coming Soon</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
      </ul>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;


