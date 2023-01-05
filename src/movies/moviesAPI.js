import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRockets } from './reducer';
import { FETCH_ROCKETS_URL, FETCH_ROCKETS } from '../actions';

const getMovies = createAsyncThunk(FETCH_ROCKETS, async (_, thunkAPI) => {
  const res = await fetch(FETCH_ROCKETS_URL);
  const data = await res.json();
  await thunkAPI.dispatch(fetchRockets(data));
  return data;
});

export default getMovies;
