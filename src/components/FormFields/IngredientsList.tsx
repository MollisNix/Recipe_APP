import React from 'react'

import { useValidation } from '../../context'

import { Button } from '../Button'
import { IngredientListItem } from '.'
import { ValidationErros } from './ValidationErros'

import styles from './Fields.module.css'

export const IngredientList = () => {
  const { fields, append } = useValidation()
  const handleAddIngredient = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const newIngredients = {
      ingredientId: 0,
      amount: '',
      amountType: 'cup',
    }
    append(newIngredients)
  }

  return (
    <>
      {fields.map((item, index) => (
        <React.Fragment key={item.id}>
          <IngredientListItem key={item.id} index={index} />
          <ValidationErros styles={styles} index={index} />
        </React.Fragment>
      ))}
      <Button styles={styles.addIngredientsButton} onClick={handleAddIngredient}>
        +Add ingredient
      </Button>
    </>
  )
}
