import React from 'react'
import { render } from '@testing-library/react'
import App from 'components/app'

test('renders learn react link', () => {
  const { getByTestId } = render(<App />)
  const linkElement = getByTestId("logo")
  expect(linkElement).toBeInTheDocument()
});
