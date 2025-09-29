import type { ButtonInterface } from '../../types/ButtonTypes'

export const Button = ({ children, styles, ...props }: ButtonInterface) => {
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}
