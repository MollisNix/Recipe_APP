import { HandleFavoriteType, HandleRemoveType } from './types'

export const handleClick: HandleFavoriteType = (e, toggleFavorites, id, isFavorite) => {
  e.stopPropagation()
  e.preventDefault()
  void toggleFavorites(id, isFavorite)
}

export const handleRemoveCard: HandleRemoveType = (e: React.MouseEvent, setShowModal) => {
  e.stopPropagation()
  e.preventDefault()
  setShowModal(true)
}
