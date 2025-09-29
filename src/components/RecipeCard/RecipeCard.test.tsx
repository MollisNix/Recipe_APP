import { screen, render, fireEvent, cleanup, waitFor } from '@testing-library/react'
import React from 'react'
import { vi } from 'vitest'
import * as ReactDOM from 'react-dom'
import { AppProvider } from '../../context'
import { MemoryRouter } from 'react-router-dom'
import { RecipeCard } from './RecipeCard'

vi.mock('react-dom', async () => {
  const actual: typeof ReactDOM = await vi.importActual('react-dom')
  return {
    ...actual,
    createPortal: (node: React.ReactNode) => node,
  }
})

const toggleFavoriteMock = vi.fn()

vi.mock('../../../hook', () => ({
  useToggleFavorites: () => ({
    toggleFavorites: toggleFavoriteMock,
    error: null,
  }),
}))

const mockProps = {
  id: 10,
  name: 'Test Recipe',
  ingredients: [
    { ingredientId: 1, amount: 1, amountType: 'cup' },
    { ingredientId: 2, amount: 2, amountType: 'tablespoon' },
  ],
  timings: 30,
  isFavorite: false,
}

const renderWithProvider = (ui: React.ReactElement) => {
  render(
    <MemoryRouter>
      <AppProvider>{ui}</AppProvider>
    </MemoryRouter>
  )
}

describe('Recipe card test', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  it('Render name, right amount and coocking time', () => {
    renderWithProvider(<RecipeCard {...mockProps} />)

    expect(screen.getByText('Test Recipe')).toBeInTheDocument()
    expect(screen.getByText('2 ingredients')).toBeInTheDocument()
    expect(screen.getByText('30min.')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /change recipe button/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /remove item/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add to bookmarks/i })).toBeInTheDocument()
  })

  it('Shows the error message', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.resolve({ ok: false, status: 500, statusText: 'Internal Server Error' }))
    )

    renderWithProvider(<RecipeCard {...mockProps} />)
    const bookmarkButton = screen.getByRole('button', { name: /add to bookmarks/i })
    fireEvent.click(bookmarkButton)

    await waitFor(() => {
      expect(screen.getByText(/something went wrong on our end/i)).toBeInTheDocument()
    })
  })

  it('Open edit modal after click edit button', () => {
    renderWithProvider(<RecipeCard {...mockProps} />)

    const changeButton = screen.getByRole('button', { name: /change recipe button/i })
    fireEvent.click(changeButton)

    expect(screen.getByText(/editing your recipe/i)).toBeInTheDocument()
  })

  it('Open delete modal after clicking on delete button', () => {
    renderWithProvider(<RecipeCard {...mockProps} />)
    const deleteButton = screen.getByRole('button', { name: /remove item/i })
    fireEvent.click(deleteButton)
    expect(screen.getByText('yes, delete')).toBeInTheDocument()
  })
})
