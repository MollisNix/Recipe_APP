export type HandleFavoriteType = (
  e: React.MouseEvent,
  toggleFavorites: (id: number, isFavorite: boolean | undefined) => Promise<void>,
  id: number,
  isFavorite: boolean | undefined
) => void

export type HandleRemoveType = (
  e: React.MouseEvent,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => void
