const SET_INITIAL_STATE = 'SET_INITIAL_STATE'
const CHANGE_CARD = 'CHANGE_CARD'
const DELETE_CARD = 'DELETE_CARD'
const TOGGLE_BOOKMARK = 'TOGGLE_BOOKMARK'
const ADD_CARD = 'ADD_CARD'

export { SET_INITIAL_STATE, ADD_CARD, CHANGE_CARD, DELETE_CARD, TOGGLE_BOOKMARK }

export const DEFAULT_FORM_DATA = {
  id: Date.now(),
  img: '',
  name: '',
  description: '',
  label: '',
  cookingTime: '',
  isFavorite: false,
  isPopular: false,
  isRecipeOfDay: false,
  ingredients: [
    {
      ingredientId: 0,
      amount: '',
      amountType: 'cup',
    },
  ],
}

export const IS_DOCUMENT_EXIST = typeof document !== 'undefined' && document.body
export const AMOUNT_TYPES = [
  { value: 'cup', label: 'cup' },
  { value: 'piece', label: 'pc' },
  { value: 'ounces', label: 'oz' },
  { value: 'pound', label: 'lb' },
  { value: 'tablespoon', label: 'tbsp' },
  { value: 'cloves', label: 'cl' },
  { value: 'kilograms', label: 'kg' },
]
