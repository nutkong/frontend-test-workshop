import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Home from '../Home'

afterEach(cleanup)

test('display correctly', () => {
  const { getByTestId } = render(<Home />)
  expect(getByTestId('home')).toHaveTextContent('Home Screen')
})
