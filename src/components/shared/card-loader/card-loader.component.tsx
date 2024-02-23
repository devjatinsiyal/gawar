import { type FC } from 'react'
import CardContainer from '../card-container/card-container.component'
import Loader from '../loader/loader.component'
import styles from './card-loader.module.scss'
const { container } = styles
const cardContainerStyles = {
  minWidth: '586px',
  display: 'flex',
}

const CardLoader: FC = () => {
  return (
    <CardContainer styles={cardContainerStyles}>
      <div className={container}>
        <Loader />
      </div>
    </CardContainer>
  )
}

export default CardLoader
