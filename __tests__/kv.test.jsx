import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Kv from '../src/components/Kv/Kv'

describe('Kv', () => {
  it('renders a heading', () => {
    render(<Kv />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
