import { useNonDailyRecipes } from '../../../../hooks'

import { RecipeList } from '../../../../components/RecipeList'

import styles from './ExploreRecipes.module.css'

const ExploreRecipe = () => {
  const recipes = useNonDailyRecipes()

  if (!recipes.length) {
    return (
      <h3 className={styles.message}>
        Currently there are no recipes in the list, please use the add button to create some!
      </h3>
    )
  }

  return (
    <div className={styles.container}>
      <h2>explore recipes</h2>
      <RecipeList data={recipes} />
    </div>
  )
}

export default ExploreRecipe
