import { FETCH_ROCKETS, FETCH_ROCKETS_FULFILLED } from '../actions';

export function fetchRockets(payload) {
  return {
    type: FETCH_ROCKETS,
    payload,
  };
}

export default function reducer(state = [], action = {}) {
  let movies = [];
  switch (action.type) {
    case FETCH_ROCKETS_FULFILLED:
      action.payload.forEach((movie, index) => {
        movies = [
          ...movies,
          {
            id: index + 1,
            name: movie.name,
            images: movie.image.medium,
          },
        ];
      });
      return [...movies];
    default:
      return [...state];
  }
}
