import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Slideshow from './Slideshow'
import { describe, test, expect } from 'vitest'

describe('Slideshow', () => {
  const pictures = ['photo1.jpg', 'photo2.jpg']

  test('affiche la première photo', () => {
    render(<Slideshow pictures={pictures} />)

    expect(screen.getByAltText('Photo 1 du logement')).toHaveAttribute(
      'src',
      'photo1.jpg'
    )
    expect(screen.getByText('1/2')).toBeInTheDocument()
  })

  test('passe à la photo suivante', () => {
    render(<Slideshow pictures={pictures} />)

    fireEvent.click(screen.getByRole('button', { name: 'Photo suivante' }))

    expect(screen.getByAltText('Photo 2 du logement')).toHaveAttribute(
      'src',
      'photo2.jpg'
    )
    expect(screen.getByText('2/2')).toBeInTheDocument()
  })

  test('revient à la photo précédente', () => {
    render(<Slideshow pictures={pictures} />)

    fireEvent.click(screen.getByRole('button', { name: 'Photo précédente' }))

    expect(screen.getByText('2/2')).toBeInTheDocument()
  })

  test('masque les flèches avec une seule photo', () => {
    render(<Slideshow pictures={['photo1.jpg']} />)

    expect(
      screen.queryByRole('button', { name: 'Photo suivante' })
    ).not.toBeInTheDocument()
  })
})