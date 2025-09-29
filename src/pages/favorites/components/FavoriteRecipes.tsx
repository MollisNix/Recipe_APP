import { Link } from 'react-router-dom'
import { useFavoriteRecipes } from '../../../hooks'

import { RecipeList } from '../../../components/RecipeList'
import styles from './FavoriteRecipes.module.css'

const FavoriteRecipes = () => {
  const favorites = useFavoriteRecipes()

  if (!favorites.length) {
    return (
      <div className={styles.messageContainer}>
        <h2 className={styles.message}>Currently there are no favorites recipes, please explore our catalogue!</h2>
        <Link to="/recipes" className={styles.returnButton}>
          Back to the recipes page!
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <RecipeList data={favorites} />
    </div>
  )
}

export default FavoriteRecipes
