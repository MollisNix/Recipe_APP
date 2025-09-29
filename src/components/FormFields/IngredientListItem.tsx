import React from 'react'
import { useGetState, useValidation } from '../../context'

import { QuantitySetter, IngredientSelect } from './index'
import { RemoveButton } from '../Button'

import styles from './Fields.module.css'

export const IngredientListItem = ({ index }: { index: number }) => {
  const { remove } = useValidation()
  const { state } = useGetState()
  const ingredients = state.ingredients

  const handRemoveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()

    if (Number.isInteger(index)) {
      remove(index)
    }
  }
  return (
    <div className={styles.formField}>
      <IngredientSelect styles={styles} index={index} ingredients={ingredients} />

      <QuantitySetter styles={styles} index={index} ingredients={ingredients} />
      <RemoveButton onClick={handRemoveItem} outerStyles={styles}></RemoveButton>
    </div>
  )
}
