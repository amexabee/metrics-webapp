import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Poster from './poster';
import './movies.css';
import SearchInput from '../components/search';

const Movies = () => {
  const list = useSelector((state) => state.movies);
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = list.filter((movie) => movie.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <SearchInput search={search} handleChange={handleChange} />
      <div className="grid-container">
        {filtered.map((movie) => (
          <div className="grid-item" key={movie.id}>
            <Poster id={movie.id} name={movie.name} images={movie.images} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
