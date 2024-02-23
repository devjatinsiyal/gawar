'use client'
import { type CSSProperties, type FC } from 'react'

import styles from './main-banner.module.scss'
import CardButton from '@/components/shared/card-button/card-button.component'

interface BannerProps {
  title: string
  subTitle: string
  cta: string
  background?: CSSProperties
  overrides?: NestedRecord
}

// const customOverrides: Record<string, CSSProperties> = {
//   buttonTitle: {
//     transformOrigin: 'right center',
//   },
//   cardButton: {
//     transformOrigin: 'right center',
//   },
// }

const { container, textContent, bannerTitle, bannerSubTitle } = styles
const Banner: FC<BannerProps> = ({
  title,
  subTitle,
  cta,
  background,
  overrides,
}) => {
  return (
    <div className={container} style={background ?? {}}>
      <div className={textContent}>
        <div className={bannerTitle} style={overrides?.title ?? {}}>
          {title}
        </div>
        <div className={bannerSubTitle} style={overrides?.subTitle ?? {}}>
          {subTitle}
        </div>
        <div>
          <CardButton
            overrides={overrides}
            styles={overrides?.cta ?? {}}
            title={cta}
            onClick={() => {
              console.log('great!')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
