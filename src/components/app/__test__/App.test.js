import React from 'react';
import { render } from '@testing-library/react';
import App from 'components/app';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Flipdish App/i);
  expect(linkElement).toBeInTheDocument();
});
