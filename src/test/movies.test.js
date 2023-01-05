import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../ConfigStore';
import Movies from '../movies/movies';

describe('Main component', () => {
  it('Render all movies', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Movies />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
