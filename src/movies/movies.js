import React from 'react';
import { useSelector } from 'react-redux';
import Poster from './poster';
import './movies.css';

const Movies = () => {
  const moviesList = useSelector((state) => state.movies);
  return (
    <div className="grid-container">
      {moviesList.map((movie) => (
        <div className="grid-item" key={movie.id}>
          <Poster id={movie.id} name={movie.name} images={movie.images} />
        </div>
      ))}
    </div>
  );
};

export default Movies;
