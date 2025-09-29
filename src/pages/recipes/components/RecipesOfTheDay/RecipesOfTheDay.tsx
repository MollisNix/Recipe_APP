import { useRecipesOfTheDay } from '../../../../hooks'

import { RecipeList } from '../../../../components/RecipeList'

import styles from './RecipesOfTheDay.module.css'

const RecipesOfTheDay = () => {
  const recipesOfTheDay = useRecipesOfTheDay()

  if (!recipesOfTheDay.length) {
    return (
      <h3 className={styles.message}>
        Currently there are no recipes in the list, please use the add button to create some!
      </h3>
    )
  }
  return (
    <div className={styles.container}>
      <h2>recipe of the day</h2>

      <RecipeList data={recipesOfTheDay} />
    </div>
  )
}

export default RecipesOfTheDay
