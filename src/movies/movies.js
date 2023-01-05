import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Poster from './poster';
import './movies.css';
import Search from '../components/search';

const Movies = () => {
  const list = useSelector((state) => state.movies);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = list.filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Search search={search} handleChange={handleChange} />
      <div className="grid-container">
        {filtered.map((movie) => (
          <Link to={`/${movie.id}`} key={movie.id}>
            <div className="grid-item" key={movie.id}>
              <Poster id={movie.id} name={movie.name} images={movie.images} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Movies;
