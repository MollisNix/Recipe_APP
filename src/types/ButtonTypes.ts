import type { ButtonHTMLAttributes, MouseEventHandler } from 'react'

export interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface BaseActionButtonInterface {
  onClick: MouseEventHandler<HTMLButtonElement>
  outerStyles?: { [key: string]: string }
}

export type BookmarkButtonInterface = { isFavorite: boolean | undefined } & BaseActionButtonInterface

export type RemoveButtonInterface = BaseActionButtonInterface

export type ChangeButtonInterface = BaseActionButtonInterface

export type CloseButtonType = BaseActionButtonInterface
