import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { Be } from '.'
import { BeProps } from './index.types'

describe('Be - A Bootstrap Element', () => {
  test('component is a valid function', () => {
    expect(Be).toBeDefined()
  })

  test('renders text passed to children', () => {
    render(<Be>This is an example</Be>)
    expect(screen.getByText('This is an example')).toBeDefined()
  })

  test('supports other html attributes and doesnt convert it to classnames', () => {
    const handleClick = jest.fn()
    render(
      <Be as='button' role='button' onClick={handleClick}>
        a button
      </Be>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByRole('button')).toHaveTextContent('a button')
    expect(screen.getByRole('button')).not.toHaveAttribute('class')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('assign supported BE classnames', () => {
    render(
      <Be as='button' flex='column' align='content-center' overflow='auto'>
        a button
      </Be>
    )
    expect(screen.getByRole('button')).toHaveAttribute('class')
  })

  test('add className', () => {
    render(
      <Be as='button' role='button' className='test'>
        a button
      </Be>
    )
    expect(screen.getByRole('button')).toHaveAttribute('class')
    expect(screen.getByRole('button')).toHaveClass('test')
  })

  test('add className along with BE props', () => {
    render(
      <Be as='button' role='button' flex='column' className='test'>
        a button
      </Be>
    )
    expect(screen.getByRole('button')).toHaveClass('test')
    expect(screen.getByRole('button')).toHaveClass('flex-column')
  })
})
