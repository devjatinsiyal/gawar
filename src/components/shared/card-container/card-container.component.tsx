import { type FC, type ReactNode } from 'react'
import styles from './card-container.module.scss'

interface NestedRecord {
  [key: string]: string | NestedRecord
}

interface CardContainerProps {
  children: ReactNode
  styles?: NestedRecord
}

const { container } = styles

const CardContainer: FC<CardContainerProps> = ({ children, styles: style }) => (
  <div style={style ?? {}} className={container}>
    {children}
  </div>
)

export default CardContainer
