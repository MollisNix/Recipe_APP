import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AppProvider } from '../context'
import { RecipesPage } from '../pages/Recipes'
import { FavoritePage } from '../pages/Favorites'

import { DetailCard } from '../components/DetailCard'

import App from '../App'
import { NotFound } from '../pages/NotFound/NotFound'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <AppProvider>
        <App />
      </AppProvider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/recipes" replace />,
      },
      {
        path: 'recipes',
        element: <RecipesPage />,
        children: [{ path: ':id', element: <DetailCard /> }],
      },
      {
        path: 'favorite',
        element: <FavoritePage />,
        children: [{ path: ':id', element: <DetailCard /> }],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
