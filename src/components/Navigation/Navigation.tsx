import { NavLink } from 'react-router-dom'

import { isActiveToggler } from '../../utils/helpers'

import recipesMenuIcon from '../../assets/icons/recipesMenuIcon.svg'
import bookmarkMenuIcon from '../../assets/icons/bookmarkMenuIcon.svg'
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={styles.navigationContainer} aria-label="Main navigation">
      <NavLink
        className={({ isActive }) => isActiveToggler(isActive, styles)}
        to="/recipes"
        data-testid="nav-recipes"
        aria-label="Recipes menu button"
      >
        <img src={recipesMenuIcon} alt="" aria-hidden="true" />
      </NavLink>
      <NavLink
        className={({ isActive }) => isActiveToggler(isActive, styles)}
        to="/favorite"
        data-testid="nav-favorites"
        aria-label="Favorite recipes menu button"
      >
        <img src={bookmarkMenuIcon} alt="" aria-hidden="true" />
      </NavLink>
    </nav>
  )
}
