import { Controller } from 'react-hook-form'

import * as Select from '@radix-ui/react-select'
import { useValidation } from '../../context'

import { AMOUNT_TYPES } from '../../constants/variables'

import type { FieldItemPropsType } from '../../types/FormTypes'

export const QuantitySetter = ({ styles, index }: FieldItemPropsType) => {
  const { control, register, errors } = useValidation()
  return (
    <div className={styles.formField}>
      <div className={styles.fieldItem}>
        <label htmlFor={`quantity${index}`}>Quantity</label>
        <div className={styles.qtyInputs}>
          <input
            className={styles.qty}
            type="number"
            id={`quantity${index}`}
            placeholder="15"
            step="any"
            min={0}
            aria-invalid={!!errors.ingredients?.[index]?.amount}
            aria-describedby="recipe-quantity-error"
            {...register(`ingredients.${index}.amount`, { valueAsNumber: true })}
          />
        </div>
      </div>

      <Controller
        control={control}
        name={`ingredients.${index}.amountType`}
        render={({ field }) => (
          <div className={styles.fieldItem}>
            <Select.Root value={field.value} onValueChange={field.onChange}>
              <Select.Trigger
                className={styles.amountType}
                id={`ingredientsList-${index}`}
                aria-invalid={!!errors.ingredients?.[index]?.amountType}
                aria-describedby={`recipe-amountType-error-${index}`}
              >
                <Select.Value placeholder={`Ingredient# ${index + 1}`} />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className={styles.amountTypeDropDouwn} position="popper" sideOffset={5}>
                  <Select.Viewport className={styles.selectViewPort}>
                    {AMOUNT_TYPES.map((option) => (
                      <Select.Item key={option.value} value={option.value} className={styles.option}>
                        <Select.ItemText>{option.label}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        )}
      />
    </div>
  )
}
