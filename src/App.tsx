import { Outlet } from 'react-router-dom'

import { Navigation } from './components/Navigation/index'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.mainPage}>
      <aside className={styles.aside}>
        <Navigation />
      </aside>
      <Outlet />
    </div>
  )
}

export default App
