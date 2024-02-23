import { type FC, type ReactNode } from 'react'
import styles from './container.module.scss'
interface ContainerProps {
  children: ReactNode
  styles?: Record<string, string>
}

const { container } = styles

const Container: FC<ContainerProps> = ({ children, styles: style }) => (
  <div className={container} style={style ?? {}}>
    {children}
  </div>
)

export default Container
