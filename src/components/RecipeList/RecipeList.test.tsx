import { render, screen } from '@testing-library/react'
import { RecipeList } from './RecipeList'
import { AppProvider } from '../../context'
import { MemoryRouter } from 'react-router-dom'
const mockRecipes = [
  {
    id: 1,
    name: 'Chocolate Chip Cookies',
    description: 'Classic homemade chocolate chip cookies',
    label: 'Dessert',
    cookingTime: 15,
    isFavorite: true,
    isPopular: true,
    isRecipeOfDay: true,
    ingredients: [
      {
        ingredientId: 1,
        amount: 2,
        amountType: 'cup',
      },
      {
        ingredientId: 2,
        amount: 1,
        amountType: 'cup',
      },
      {
        ingredientId: 3,
        amount: 0.5,
        amountType: 'cup',
      },
    ],
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Classic salad with romaine lettuce, croutons, and Caesar dressing',
    label: 'Salad',
    cookingTime: 10,
    isFavorite: false,
    isPopular: false,
    isRecipeOfDay: false,
    ingredients: [
      {
        ingredientId: 7,
        amount: 1,
        amountType: 'piece',
      },
      {
        ingredientId: 8,
        amount: 1,
        amountType: 'cup',
      },
      {
        ingredientId: 9,
        amount: 0.25,
        amountType: 'cup',
      },
    ],
  },
]

describe('Recipe component', () => {
  it('Render properly render recipe card', () => {
    render(
      <MemoryRouter>
        <AppProvider>
          <RecipeList data={mockRecipes} />
        </AppProvider>
      </MemoryRouter>
    )

    expect(screen.getByText('Chocolate Chip Cookies')).toBeInTheDocument()
    expect(screen.getByText('15min.')).toBeInTheDocument()

    expect(screen.getByText('Caesar Salad')).toBeInTheDocument()
    expect(screen.getByText('10min.')).toBeInTheDocument()

    expect(screen.getAllByText('3 ingredients')).toHaveLength(2)
  })
})
