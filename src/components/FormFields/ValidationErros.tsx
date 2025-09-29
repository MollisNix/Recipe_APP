import { useValidation } from '../../context'

export const ValidationErros = ({ index, styles }: { index: number; styles: { [key: string]: string } }) => {
  const { errors } = useValidation()
  return (
    <>
      {errors.ingredients?.[index]?.amount && (
        <p id="recipe-quantity-error" role="alert" className={styles.alert}>
          {errors.ingredients[index]?.amount.message}
        </p>
      )}
      {errors.ingredients?.[index]?.amountType && (
        <p id="recipe-amountType-error" role="alert" className={styles.alert}>
          {errors.ingredients[index]?.amountType.message}
        </p>
      )}
      {errors.ingredients && (
        <p id="recipe-ingredientId-error" role="alert" className={styles.alert}>
          {errors.ingredients.root?.message}
        </p>
      )}
      {errors.ingredients?.[index]?.ingredientId && (
        <p id="recipe-ingredientId-error" role="alert" className={styles.alert}>
          {errors.ingredients[index]?.ingredientId.message}
        </p>
      )}
    </>
  )
}
