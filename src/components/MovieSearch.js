import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!searchQuery) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9346dda45797685183020b41bacc2d54&query=${searchQuery}`
      );
      setMovies(response.data.results);
    } catch (error) {
      setError('Error fetching movies. Please try again later.');
    }
  };

  return (
    <div className="movie-search">
      <input
        type="text"
        placeholder="Search for movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      <div className="movie-results">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
