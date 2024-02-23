'use client'
import { CSSProperties, type FC } from 'react'
import {
  ArrowLeftImage,
  ArrowRightImage,
} from '../icon-image/icon-image.component'
import styles from './card-button.module.scss'

interface CardButtonProps {
  title: string
  onClick: () => void
  styles?: CSSProperties
  overrides?: Record<string, CSSProperties>
  type?: 'primary' | 'secondary'
  iconPlacement?: 'left' | 'right'
  isLoading?: boolean
}

const {
  cardButton,
  cardButtonPrimary,
  cardButtonSecondary,
  buttonTitle,
  spinner,
  iconLeftContainer,
  iconRightContainer,
  cardButtonLeft,
  cardButtonRight,
  buttonTitleLeft,
  buttonTitleRight,
} = styles

const CardButton: FC<CardButtonProps> = ({
  onClick,
  title,
  styles: style,
  type,
  iconPlacement,
  isLoading,
  overrides,
}) => (
  <button
    onClick={() => {
      onClick()
    }}
    className={`${cardButton} ${!iconPlacement || iconPlacement === 'right' ? cardButtonRight : cardButtonLeft} ${type ? (type === 'primary' ? cardButtonPrimary : cardButtonSecondary) : cardButtonPrimary}`}
    style={style ? { ...style, ...overrides?.cardButton } : {}}>
    {iconPlacement && iconPlacement === 'left' ? (
      <div className={iconLeftContainer}>
        <ArrowLeftImage />
      </div>
    ) : null}
    <div
      className={`${buttonTitle} ${!iconPlacement || iconPlacement === 'right' ? buttonTitleRight : buttonTitleLeft}`}
      style={overrides?.buttonTitle ?? {}}>
      {title}
    </div>
    {!isLoading && (!iconPlacement || iconPlacement === 'right') ? (
      <div className={iconRightContainer}>
        <ArrowRightImage />
      </div>
    ) : null}
    {isLoading ? (
      <div style={{ position: 'relative', minWidth: '30px' }}>
        <span className={`${spinner}`}></span>{' '}
      </div>
    ) : null}
  </button>
)

export default CardButton
