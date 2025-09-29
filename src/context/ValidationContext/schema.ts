import * as Yup from 'yup'

import type { RecipeValidationInterface } from '../../interfaces/validationInterface'

export const VALIDATION_SCHEMA: Yup.ObjectSchema<RecipeValidationInterface> = Yup.object().shape({
  id: Yup.number().optional(),
  name: Yup.string().required('Name of the recipe is required').min(3, 'Name should consist of at least 3 characters'),
  cookingTime: Yup.number()
    .typeError('Cooking time must be a number')
    .required('Please, set the estimated time')
    .min(0.01, 'Time must be a non-negative number'),
  description: Yup.string()
    .required('Description is required')
    .min(4, 'Description should be at least 10 characters long')
    .max(180, 'Description should not be longer than 180 characters'),
  label: Yup.string().optional(),
  isFavorite: Yup.boolean().optional(),
  isPopular: Yup.boolean().optional(),
  isRecipeOfDay: Yup.boolean().optional(),
  ingredients: Yup.array()
    .of(
      Yup.object().shape({
        ingredientId: Yup.number().required('Choose the ingredient from the list'),
        amount: Yup.number()
          .typeError('Quantity must be a number')
          .required('Quantity is required')
          .min(0.01, 'Quantity must be at leat 1'),
        amountType: Yup.string()
          .required('Choose the unit of measurement')
          .oneOf(['cup', 'piece', 'ounces', 'pound', 'tablespoon', 'cloves', 'kilograms']),
      })
    )
    .required('Add at least one ingredient')
    .min(1, 'Add at least one ingredient')
    .test('unique-ingredientID', 'Please make sure that ingredients are unique for each field', function (ingredients) {
      if (!ingredients) return true
      const ids = ingredients.map((item) => item.ingredientId)

      const uniqueID = new Set(ids)
      return ids.length === uniqueID.size
    }),
})
