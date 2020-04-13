import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('should render without crash', () => {
  const testTitleMessage = 'Hello, Electron!'
  render(<App/>)
  expect(screen.queryByText(testTitleMessage)).toBeTruthy()
})