import React from 'react';
import PropTypes from 'prop-types';
import searchIcon from '../images/Search.png';
import './search.css';

const Search = ({ search, handleChange }) => (
  <div className="search ">
    <img src={searchIcon} alt="search" />
    <input
      type="text"
      placeholder="Search for your favorites"
      value={search}
      onChange={handleChange}
      icon="search"
    />
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Search;
