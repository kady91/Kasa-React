import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Collapse from './Collapse'
import { describe, test, expect } from 'vitest'

describe('Collapse', () => {
  test('affiche le titre et le contenu', () => {
    render(
      <Collapse title="Description">
        <p>Présentation du logement</p>
      </Collapse>
    )

    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Présentation du logement')).toBeInTheDocument()
  })
})