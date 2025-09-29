import styles from './Loading.module.css'
export const Loading = ({ children, isLoaded }: { children: React.ReactNode; isLoaded: boolean }) => {
  return (
    <>
      {isLoaded ? (
        <div className={styles.loadingContainer}>
          <span className={styles.loadingText}>Loading...</span>{' '}
        </div>
      ) : (
        children
      )}
    </>
  )
}
