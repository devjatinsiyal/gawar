import { type FC } from 'react'
import styles from './media-full-width.module.scss'

const { container, slideBg } = styles

const MediaFullWidth: FC = () => {
  return (
    <div className={container}>
      {/* <div className={slideBg}>
        <video autoPlay loop muted playsInline>
          <source src='/videos/construction.mp4' type='video/mp4' />
        </video>
      </div> */}
    </div>
  )
}

export default MediaFullWidth
