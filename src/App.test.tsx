import { render, screen, fireEvent } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import { routes } from './routes/routes'
import { vi } from 'vitest'

const mockRecipes = [
  {
    id: 1,
    name: 'Test Recipe 1',
    ingredients: [
      { ingredientId: 1, amount: 1, amountType: 'cup' },
      { ingredientId: 2, amount: 2, amountType: 'tablespoon' },
    ],
    timings: 30,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Test Recipe 2',
    ingredients: [
      { ingredientId: 1, amount: 1, amountType: 'cup' },
      { ingredientId: 2, amount: 2, amountType: 'tablespoon' },
    ],
    timings: 30,
    isFavorite: true,
  },
]

describe('App Navigation', () => {
  beforeEach(() => {
    const mockPromise = Promise.resolve(mockRecipes)
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockPromise,
    } as Response)

    global.fetch = vi.fn(() => mockFetchPromise)
    render(<RouterProvider router={routes} />)
  })

  it('Render RecipePage when click on Recipes nav button', async () => {
    const recipesLink = screen.getByTestId('nav-recipes')
    fireEvent.click(recipesLink)
    expect(await screen.findByTestId('recipe-title')).toHaveTextContent('recipe')
  })

  it('Render FavoritePage when click on Favorite nav button', async () => {
    const favoriteLink = screen.getByTestId('nav-favorites')
    fireEvent.click(favoriteLink)
    expect(await screen.findByTestId('favorites-title')).toHaveTextContent('recipe')
  })

  it('Render NotFound page when the route is wrong', async () => {
    const memoryRouter = createMemoryRouter(routes.routes, {
      initialEntries: ['/some/bad/routes'],
    })
    render(<RouterProvider router={memoryRouter} />)
    expect(await screen.findByText(/There is no such a page/i)).toBeInTheDocument()
  })
})
