import { Controller } from 'react-hook-form'
import * as Select from '@radix-ui/react-select'

import { useValidation } from '../../context'

import type { FieldItemPropsType } from '../../types/FormTypes'

export const IngredientSelect = ({ styles, index, ingredients }: FieldItemPropsType) => {
  const { control, errors } = useValidation()
  return (
    <Controller
      control={control}
      name={`ingredients.${index}.ingredientId`}
      render={({ field }) => (
        <div className={styles.fieldItem}>
          <h3 className={styles.selectLabel}>Ingredients</h3>
          <Select.Root value={field.value.toString()} onValueChange={(value) => field.onChange(Number(value))}>
            <Select.Trigger
              className={styles.ingredientsList}
              id={`ingredientsList-${index}`}
              aria-invalid={!!errors.ingredients?.[index]?.ingredientId}
              aria-describedby="recipe-ingredientId-error"
            >
              <Select.Value />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className={styles.dropDouwnContainer} position="popper" sideOffset={5}>
                <Select.Viewport className={styles.selectViewPort}>
                  <Select.Item disabled value="0" className={styles.option}>
                    <Select.ItemText>{`Ingredient# ${index + 1}`}</Select.ItemText>
                  </Select.Item>
                  {ingredients.map((option) => (
                    <Select.Item key={option.id} value={option.id.toString()} className={styles.option}>
                      <Select.ItemText>{option.name}</Select.ItemText>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>
      )}
    />
  )
}
