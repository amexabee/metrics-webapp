import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from '../components/search';

test('renders an input element of type text', () => {
  const { getByPlaceholderText } = render(
    <Search search="" handleChange={() => {}} />,
  );
  const inputElement = getByPlaceholderText('Search for your favorites');
  expect(inputElement).toBeDefined();
  expect(inputElement.type).toBe('text');
});
