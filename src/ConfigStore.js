import { configureStore } from '@reduxjs/toolkit';
import movies from './movies/reducer';

const store = configureStore({
  reducer: {
    movies,
  },
});
export default store;
