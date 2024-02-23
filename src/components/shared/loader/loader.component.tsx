import { type FC } from 'react'
import styles from './loader.module.scss'

const { circularLoader } = styles

const Loader: FC = () => {
  return (
    <div className={circularLoader}>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
