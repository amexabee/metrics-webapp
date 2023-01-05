import React from 'react';
import './Navbar.css';
import imdb from '../images/imdb.png';

function Navbar() {
  return (
    <div>
      <nav>
        <img className="navbar-logo" alt="" src={imdb} />
        <h1>The Ultimate Series Movies & TV Shows List</h1>
      </nav>
    </div>
  );
}

export default Navbar;
