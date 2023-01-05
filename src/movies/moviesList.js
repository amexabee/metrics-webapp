import React from 'react';
import { useSelector } from 'react-redux';
import Movies from './movies';
import './movies.css';

const MoviesList = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <div className="grid-item" key={movie.id}>
          <Movies id={movie.id} name={movie.name} images={movie.images} />
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
