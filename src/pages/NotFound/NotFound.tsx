import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <span>There is no such a page</span>
      <Link to={'/recipes'}>Go to the Recipe Page!</Link>
    </div>
  )
}
