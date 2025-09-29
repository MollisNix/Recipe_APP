import { useEffect } from 'react'

import { useRecipeById, useUpdateCard } from '../../hooks'
import { useValidation } from '../../context'
import { toRecipeInterface } from '../../utils/helpers'

import { Form } from '../Form/'
import { CloseButton, Button } from '../Button'
import { Error } from '../Error'

import type { FormModalProps } from '../../types/FormTypes'
import type { RecipeValidationInterface } from '../../interfaces/validationInterface'
import styles from './FormModal.module.css'

export const EditFormModal = ({ onClose, id }: FormModalProps) => {
  const { handleSubmit, reset } = useValidation()
  const cardData = useRecipeById(id)
  const { updateRecipe, error } = useUpdateCard()

  useEffect(() => {
    document.body.classList.add(styles.noScroll)

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [])

  useEffect(() => {
    if (cardData) {
      reset(cardData)
    }
  }, [cardData, reset])

  const onSubmit = async (data: RecipeValidationInterface) => {
    const recipe = toRecipeInterface(data, Number(data.id))
    await updateRecipe(id, recipe)
    onClose()
  }

  if (error) {
    return <Error errorMessage={error} />
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <h2 className={styles.fromTitle}>editing your recipe</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Button styles={styles.submiteButton} type="submit">
              edit recipe
            </Button>
            <CloseButton onClick={onClose} outerStyles={styles} />
          </Form>
        </div>
      </div>
    </div>
  )
}
