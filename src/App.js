import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import getMovies from './movies/moviesAPI';
import store from './ConfigStore';
import Navbar from './navbar/Navbar';
import MoviesList from './movies/moviesList';
import './App.css';

function App() {
  useEffect(() => {
    store.dispatch(getMovies());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
