import { useValidation } from '../../context'

import { IngredientList } from '../FormFields'

import type { FormTypes } from '../../types/FormTypes'
import styles from './Form.module.css'

export const Form = ({ children, onSubmit }: FormTypes) => {
  const { register, errors } = useValidation()
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.formField}>
        <div className={styles.fieldItem}>
          <label htmlFor="recipeName">Name of recipe</label>
          <input
            type="text"
            id="recipeName"
            aria-invalid={!!errors.name}
            aria-describedby="recipe-name-error"
            placeholder="Name"
            {...register('name')}
          />
        </div>

        <div className={styles.fieldItem}>
          <label htmlFor="cookingTime">Cooking time</label>
          <div className={styles.cookingTime}>
            <input
              type="number"
              id="cookingTime"
              placeholder="15"
              step="any"
              min={0}
              aria-invalid={!!errors.cookingTime}
              aria-describedby="recipe-cookingTime-error"
              {...register('cookingTime', { valueAsNumber: true })}
            />
          </div>
        </div>
      </div>
      {errors.name && (
        <span id="recipe-name-error" role="alert" className={styles.alert}>
          {errors.name.message}
        </span>
      )}
      {errors.cookingTime && (
        <span id="recipe-cookingTime-error" role="alert" className={styles.alert}>
          {errors.cookingTime.message}
        </span>
      )}

      <div className={styles.formField}>
        <div className={styles.fieldItem}>
          <label htmlFor="description">Description</label>
          <textarea
            rows={5}
            cols={30}
            aria-invalid={!!errors.description}
            aria-describedby="recipe-description-error"
            placeholder="Description description descriptiondescription description descriptiondescription description description description description description description description description"
            {...register('description')}
          />
        </div>
      </div>
      {errors.description && (
        <span id="recipe-description-error" role="alert" className={styles.alert}>
          {errors.description.message}
        </span>
      )}

      <IngredientList />
      {children}
    </form>
  )
}
