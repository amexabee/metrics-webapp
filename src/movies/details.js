/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const navigate = useNavigate();
  const list = useSelector((state) => state.movies);
  const { id } = useParams();

  const filtered = list.filter((movie) => movie.id === +id);

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="detail-container">
      <button className="go-back" type="button" onClick={handleNavigate}>
        Go Back
      </button>
      {filtered.map((movie) => (
        <div key={movie.id}>
          <h1>
            {movie.id}. {movie.name}
          </h1>
          <img alt={movie.name} src={movie.images} />
          <h3>Genre: {movie.show.genres[0]}</h3>
          <h3>Rating: {movie.show.rating.average}</h3>
          <h3>Premiered: {movie.show.premiered}</h3>
          <h3>Ended: {movie.show.ended || 'Still On Air'}</h3>
          <h3>Weight: {movie.show.weight}</h3>
          <h3>Runtime: {movie.show.runtime} min</h3>
          <h3>Average Runtime: {movie.show.averageRuntime} min</h3>
          <h3>
            Official Site:{' '}
            <a href={movie.show.officialSite} target="_blank" rel="noreferrer">
              {movie.name}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Details;
