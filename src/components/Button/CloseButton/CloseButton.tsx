import { FC } from 'react'
import type { CloseButtonType } from '../../../types/ButtonTypes'
import styles from './CloseButton.module.css'

export const CloseButton: FC<CloseButtonType> = ({ onClick, outerStyles = styles, ...props }) => {
  return (
    <button
      type="button"
      className={outerStyles.closeButton}
      onClick={onClick}
      aria-label="Close delete confirmation modal"
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={outerStyles?.closeIconContainer}
        role="img"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_16_2162)">
          <path
            d="M2.27509 23.8495C1.68667 23.8837 1.10799 23.6881 0.661067 23.3039C-0.220356 22.4173 -0.220356 20.9852 0.661067 20.0986L19.9613 0.798244C20.8781 -0.0595964 22.3166 -0.0119096 23.1745 0.904847C23.9502 1.73387 23.9954 3.00809 23.2803 3.88996L3.86635 23.3039C3.42519 23.6826 2.85579 23.8778 2.27509 23.8495Z"
            className={outerStyles?.closeIconColor}
          />
          <path
            d="M21.5525 23.8496C20.9562 23.847 20.3846 23.6103 19.9612 23.1903L0.660883 3.88993C-0.155709 2.93635 -0.0446888 1.50125 0.9089 0.68458C1.76 -0.044274 3.01521 -0.044274 3.86624 0.68458L23.2802 19.9849C24.1967 20.843 24.2441 22.2816 23.3861 23.1981C23.3519 23.2346 23.3167 23.2698 23.2802 23.304C22.8048 23.7174 22.1792 23.9149 21.5525 23.8496Z"
            className={outerStyles?.closeIconColor}
          />
        </g>
        <defs>
          <clipPath id="clip0_16_2162">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}
