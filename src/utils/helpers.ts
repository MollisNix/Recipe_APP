import type { RecipeValidationInterface } from '../interfaces/validationInterface'
import type { RecipeInterface } from '../interfaces/recipeInterface'
import type { isActiveTogglerTypes } from '../types/NavigationTypes'

export const patchData = async <T>(url: string, body: Partial<T>) => {
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return response
}

export const toRecipeInterface = (data: RecipeValidationInterface, id: number): RecipeInterface => {
  // можна генерити айді з дліни всіх ресепісів
  return {
    id: id ?? data.id,
    img: '/mockIMG3.jpg',
    name: data.name,
    description: data.description,
    label: data.label ?? '',
    cookingTime: Number(data.cookingTime),
    isFavorite: data.isFavorite ?? false,
    isPopular: data.isPopular ?? false,
    isRecipeOfDay: data.isRecipeOfDay ?? false,
    ingredients: data.ingredients,
  }
}

export const updateLocalStorage = (recipe: RecipeInterface, add: boolean) => {
  const stored: string[] = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]')
  const updated = add
    ? [...stored.filter((storedItem) => Number(storedItem) !== recipe.id), recipe.id]
    : stored.filter((storeItem) => Number(storeItem) !== recipe.id)
  localStorage.setItem('favoriteRecipes', JSON.stringify(updated))
}

export const deleteFromLocalStorage = (id: number) => {
  const stored = localStorage.getItem('favoriteRecipes')
  if (!stored) return

  try {
    const recipes = JSON.parse(stored) as Array<{ id: number }>
    const filtered = recipes.filter((recipe) => recipe.id !== id)
    localStorage.setItem('favoriteRecipes', JSON.stringify(filtered))
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Problem with JSON parsing, error message is - ${error.message}`)
    } else {
      throw new Error(`Problem with JSON parsing: unknown error`)
    }
  }
}

export const isActiveToggler: isActiveTogglerTypes = (isActive, styles) =>
  `${styles.navButton} ${isActive ? styles.active : ''}`
