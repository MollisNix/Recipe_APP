import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'

import { ValidationProvider } from '../../context'
import { useRecipeById, useToggleFavorites } from '../../hooks'
import { handleClick } from '../../utils/cardActionHandlers'
import { IS_DOCUMENT_EXIST } from '../../constants/variables'

import { CloseButton, ChangeButton, RemoveButton, BookmarkButton } from '../Button'
import { IngredientItem } from './components/IngredientList'
import { DeleteModal } from '../DeleteModal'
import { EditFormModal } from '../FormModals'
import { Error } from '../Error'

import defaultImgae from '../../assets/img/cardOpenDefaultImg.jpg'
import styles from './DetailCard.module.css'

export const DetailCard = () => {
  const [showModal, setShowModal] = useState(false)
  const [editCard, setEditCard] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  const numericID = Number(id)

  const recipe = useRecipeById(numericID)

  const { toggleFavorites, error } = useToggleFavorites()

  useEffect(() => {
    document.body.classList.add(styles.noScroll)

    return () => {
      document.body.classList.remove(styles.noScroll)
    }
  }, [])

  if (!recipe) {
    return null
  }

  if (error || Number.isNaN(numericID)) {
    return <Error errorMessage={error} />
  }

  const { name, description, ingredients, cookingTime, isFavorite, img } = recipe
  const handelCloseByWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) navigate(-1)
  }
  return (
    <div className={styles.wrapper} onClick={handelCloseByWrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img src={img ? String(img) : defaultImgae} alt="Recipe card image" width={600} height={336} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.descriptionContainer}>
            <h2>
              {name} <span className={styles.cookingTime}>{cookingTime} min.</span>
            </h2>
            <p>{description}</p>
            <div className={styles.ingredientsContainer}>
              <h3>ingredients</h3>
              <ul>
                {ingredients.map((item, inx) => (
                  <li key={inx}>
                    <IngredientItem id={item.ingredientId} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.actionContainer}>
            <div className={styles.bookmarkContainer}>
              <BookmarkButton
                isFavorite={isFavorite}
                onClick={(e) => handleClick(e, toggleFavorites, numericID, isFavorite)}
                outerStyles={styles}
              />
            </div>
            <div className={styles.mutationButtonsContainer}>
              <ChangeButton onClick={() => setEditCard(true)} outerStyles={styles} />
              <RemoveButton onClick={() => setShowModal(true)} outerStyles={styles} />
            </div>
          </div>
        </div>

        <CloseButton onClick={() => navigate(-1)} outerStyles={styles} aria-label="Close details" />
      </div>
      {showModal &&
        IS_DOCUMENT_EXIST &&
        createPortal(<DeleteModal id={numericID} onClose={() => setShowModal(false)} />, document.body)}
      {editCard &&
        IS_DOCUMENT_EXIST &&
        createPortal(
          <ValidationProvider>
            <EditFormModal id={numericID} onClose={() => setEditCard(false)} />
          </ValidationProvider>,
          document.body
        )}
    </div>
  )
}
