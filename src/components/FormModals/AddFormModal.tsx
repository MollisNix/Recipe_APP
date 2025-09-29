import { useEffect } from 'react'

import { usePostRecipe } from '../../hooks/usePostRecipe'
import { useGetState, useValidation } from '../../context/index'
import { toRecipeInterface } from '../../utils/helpers'

import { Button, CloseButton } from '../Button'
import { Form } from '../Form'
import { Error } from '../Error'

import styles from './FormModal.module.css'
import type { RecipeValidationInterface } from '../../interfaces/validationInterface'

export const AddFormModal = ({ onClose }: { onClose: () => void }) => {
  const { state } = useGetState()
  const { handleSubmit } = useValidation()

  const { postRecipe, error } = usePostRecipe()

  const id = state.recipes.reduce((max, item) => (item.id && item.id > max ? item.id : max), 0) + 1
  const onSubmit = async (data: RecipeValidationInterface) => {
    if (data) {
      const recipe = toRecipeInterface(data, id)
      await postRecipe(recipe)
      onClose()
    }
  }

  useEffect(() => {
    document.body.classList.add(styles.noScroll)

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [])

  if (error) {
    return <Error errorMessage={error} />
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <h2 className={styles.fromTitle}>adding new recipe</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Button styles={styles.submiteButton} type="submit">
              add new recipe
            </Button>
            <CloseButton onClick={onClose} outerStyles={styles} />
          </Form>
        </div>
      </div>
    </div>
  )
}
