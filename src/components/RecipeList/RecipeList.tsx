import { RecipeCard } from '../RecipeCard'

import { RecipeInterface } from '../../interfaces/recipeInterface'

import styles from './RecipeList.module.css'

export const RecipeList = ({ data }: { data: RecipeInterface[] }) => {
  return (
    <>
      <div className={styles.itemList}>
        {data.map((cardProps) => (
          <RecipeCard
            key={cardProps.id}
            name={cardProps.name}
            ingredients={cardProps.ingredients}
            timings={cardProps.cookingTime}
            id={Number(cardProps.id)}
            img={String(cardProps.img)}
            isFavorite={cardProps.isFavorite || false}
          />
        ))}
      </div>
    </>
  )
}
