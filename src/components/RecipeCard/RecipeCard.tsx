import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

import { useToggleFavorites } from '../../hooks'
import { handleClick, handleRemoveCard } from '../../utils/cardActionHandlers'
import { ValidationProvider } from '.././../context/'

import { EditFormModal } from '../FormModals'
import { BookmarkButton, RemoveButton, ChangeButton } from '../Button'
import { DeleteModal } from '../DeleteModal'
import { Error } from '../Error'

import styles from './RecipeCard.module.css'
import defaultImg from '../../assets/img/cardDefaultImg.jpg'
import { RecipeTypes } from '../../types/RecipeListTypes'

export const RecipeCard = ({ name, ingredients, timings, id, img, isFavorite }: RecipeTypes) => {
  const [showModal, setShowModal] = useState(false)
  const [editCard, setEditCard] = useState(false)
  const { toggleFavorites, error } = useToggleFavorites()

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setEditCard(true)
  }
  if (error) {
    return <Error errorMessage={error} />
  }

  return (
    <>
      <Link
        to={`${id}`}
        className={styles.listItem}
        style={{ backgroundImage: `url(${img ? String(img) : defaultImg})` }}
      >
        <div className={styles.actionContainer}>
          <div className={styles.bookMark}>
            <BookmarkButton onClick={(e) => handleClick(e, toggleFavorites, id, isFavorite)} isFavorite={isFavorite} />
          </div>
          <div className={styles.actions}>
            <ChangeButton onClick={handleChange} />
            <RemoveButton onClick={(e) => handleRemoveCard(e, setShowModal)} />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h3>{name}</h3>
          <p>
            <span>{ingredients.length} ingredients</span>
            <span>{timings}min.</span>
          </p>
        </div>
      </Link>
      {showModal && createPortal(<DeleteModal id={id} onClose={() => setShowModal(false)} />, document.body)}
      {editCard &&
        createPortal(
          <ValidationProvider>
            <EditFormModal id={id} onClose={() => setEditCard(false)} />
          </ValidationProvider>,
          document.body
        )}
    </>
  )
}
