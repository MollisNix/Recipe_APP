import { useEffect } from 'react'

import { useDeleteCard } from '../../hooks'
import { useGetActions } from '../../context'
import { DELETE_CARD } from '../../constants/variables'

import { Button, CloseButton } from '../Button'
import { Error } from '../Error'

import styles from './DeleteModal.module.css'

export const DeleteModal = ({ id, onClose }: { id: number; onClose: () => void }) => {
  const { dispatch } = useGetActions()
  const { deleteCard, error } = useDeleteCard()

  const handleDeletion = async () => {
    const success = await deleteCard(id)

    if (success) {
      dispatch({ type: DELETE_CARD, payload: id })
    }

    onClose()
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
    <div className={styles.modalContainer} role="dialog" aria-modal="true">
      <div className={styles.contentContainer}>
        <h2 className={styles.modalHeading}>confirmation</h2>
        <p className={styles.modalNotification}>Are you sure you want to delete this recipe?</p>
        <div className={styles.actionContainer}>
          <Button styles={styles.cancelButton} onClick={onClose} aria-label="Delete decline button">
            cancel
          </Button>
          <Button styles={styles.confirmButton} onClick={handleDeletion} aria-label="Delete confirmation button">
            yes, delete
          </Button>
        </div>
        <CloseButton onClick={onClose} outerStyles={styles} />
      </div>
    </div>
  )
}
