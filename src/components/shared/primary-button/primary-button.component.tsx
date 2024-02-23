'use client'
import { type FC } from 'react'
import {
  ArrowLeftImage,
  ArrowRightImage,
} from '../icon-image/icon-image.component'
import styles from './primary-button.module.scss'

interface PrimaryButtonProps {
  title: string
  onClick: () => void
  styles?: Record<string, string>
  iconPlacement?: 'left' | 'right'
  isLoading?: boolean
}

const { welcomeButton, logoContainer, buttonContainer, buttonTitle, spinner } =
  styles

const PrimaryButton: FC<PrimaryButtonProps> = ({
  onClick,
  title,
  styles: style,
  iconPlacement,
  isLoading,
}) => (
  <button
    onClick={() => {
      onClick()
    }}
    className={welcomeButton}
    style={style ?? {}}>
    <div className={buttonContainer}>
      {iconPlacement && iconPlacement === 'left' ? (
        <div className={logoContainer}>
          <ArrowLeftImage />
        </div>
      ) : null}
      <div className={buttonTitle}>{title}</div>
      {!isLoading && (!iconPlacement || iconPlacement === 'right') ? (
        <div className={logoContainer}>
          <ArrowRightImage />
        </div>
      ) : null}
      {isLoading ? (
        <div style={{ position: 'relative', minWidth: '30px' }}>
          <span className={`${spinner}`}></span>{' '}
        </div>
      ) : null}
    </div>
  </button>
)

export default PrimaryButton
