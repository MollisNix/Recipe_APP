import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Outlet } from 'react-router-dom'

import { useGetActions, ValidationProvider } from '../../context'
import { IS_DOCUMENT_EXIST } from '../../constants/variables'

import { Button } from '../../components/Button'
import ExploreRecipe from './components/ExploreRecipes/ExploreRecipes'
import RecipesOfTheDay from './components/RecipesOfTheDay/RecipesOfTheDay'
import { Loading } from '../../components/Loading'
import { AddFormModal } from '../../components/FormModals'

import styles from './RecipesPage.module.css'

export const RecipesPage = () => {
  const [showFormModal, setShowFormModal] = useState(false)
  const handleCloseFormModal = () => {
    setShowFormModal(false)
  }

  const { loading } = useGetActions()

  return (
    <Loading isLoaded={loading}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 data-testid="recipe-title">recipe</h1>
          <Button styles={styles.addRecipeButton} onClick={() => setShowFormModal(true)}>
            + add new recipe
          </Button>
        </header>
        <main>
          <RecipesOfTheDay />
          <ExploreRecipe />
          {showFormModal &&
            IS_DOCUMENT_EXIST &&
            createPortal(
              <ValidationProvider>
                <AddFormModal onClose={handleCloseFormModal} />
              </ValidationProvider>,
              document.body
            )}
          <Outlet />
        </main>
      </div>
    </Loading>
  )
}
