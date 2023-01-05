import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import getMovies from './movies/moviesAPI';
import store from './ConfigStore';
import Navbar from './navbar/Navbar';
import Movies from './movies/movies';
import './App.css';
import SinglePage from './movies/details';

function App() {
  useEffect(() => {
    store.dispatch(getMovies());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
