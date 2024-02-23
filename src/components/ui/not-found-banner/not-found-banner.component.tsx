'use client'
import { type FC } from 'react'
import { useRouter } from 'next/navigation'
import styles from './not-found.module.scss'
import CardButton from '@/components/shared/card-button/card-button.component'

interface NotFoundBannerProps {
  title: string
  cta: string
  background?: Record<string, string | number>
  overrides?: NestedRecord
}

const {
  container,
  textContent,
  imageContent,
  ctaContainer,
  bannerTitle,
  bannerSubTitle,
} = styles
const NotFoundBanner: FC<NotFoundBannerProps> = ({
  title,
  cta,
  background,
  overrides,
}) => {
  const router = useRouter()
  return (
    <div className={container} style={background ?? {}}>
      <div className={textContent}>
        <div className={bannerTitle} style={overrides?.title ?? {}}>
          {title}
        </div>
        <div>
          <CardButton
            iconPlacement='left'
            onClick={() => router.back()}
            title={cta}
            overrides={overrides}
            styles={overrides?.cta}
          />
          {/* <button onClick={e => router.back()} className={ctaContainer} style={overrides?.cta ?? {}}>
            {cta}
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default NotFoundBanner
