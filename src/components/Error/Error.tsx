import { Link } from 'react-router-dom'
import styles from './Error.module.css'

export const Error = ({ errorMessage }: { errorMessage: string | null }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <h1 className={styles.errorCode}>Oops!</h1>
        <p className={styles.errorMessage}>Something went wrong on our end.</p>
        <p className={styles.errorDescription}>
          We couldn&apos;t load the requested data. Please try again later or return to the home page.
        </p>
        <p className={styles.errorDescription}>{errorMessage}</p>
        <Link to="/" className={styles.homeButton}>
          Go to Home Page
        </Link>
      </div>
    </div>
  )
}
