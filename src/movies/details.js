import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
  const list = useSelector((state) => state.movies);
  const { id } = useParams();

  const filtered = list.filter((movie) => movie.id === id);

  //   return {{filtered.map((movie) => <h1>movie.id</h1>)}};
  return (
    <>
      {filtered.map((movie) => (
        <div className="grid-container" key={movie.id}>
          <h1>{movie.id}</h1>
          <h1>hello</h1>
        </div>
      ))}
    </>
  );
};

export default SinglePage;
