import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { App } from '../App'

afterEach(cleanup)

test('display correctly', () => {
  const { getByTestId } = render(<App />)
  expect(getByTestId('main-app')).toHaveTextContent('React Application')
})
