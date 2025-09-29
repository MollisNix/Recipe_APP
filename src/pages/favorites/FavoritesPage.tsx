import { Outlet } from 'react-router-dom'

import { useGetActions } from '../../context'

import FavoriteRecipes from './components/FavoriteRecipes'
import { Loading } from '../../components/Loading'

import styles from './Favorite.module.css'

export const FavoritePage = () => {
  const { loading } = useGetActions()
  return (
    <Loading isLoaded={loading}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1 data-testid="favorites-title">favorites recipes</h1>
        </header>
        <main>
          <FavoriteRecipes />
          <Outlet />
        </main>
      </div>
    </Loading>
  )
}
