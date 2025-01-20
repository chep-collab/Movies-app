import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ movies = [] }) => {
  return (
    <div className="home">
      <h1>Popular Movies</h1>
      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <Link to={`/movie/${movie.id}`}>View Details</Link>
            </div>
          ))
        ) : (
          <p>Loading movies or no movies available at the moment...</p>
        )}
      </div>
    </div>
  );
};

export default Home;


