import React from 'react'
import Banner from '@/components/ui/main-banner/main-banner.component'

const pageData = {
  title: 'Excited for missions to build your road to success?',
  subTitle:
    'We are always on a hunt for young civil engineers and experienced professionals to join our teams',
  cta: 'Get Hired',
  background: {
    //   ['backgroundImage']: `url('/images/gawar-g.svg'), url('/images/home-main-banner.svg')`,
    //   ['backgroundSize']: `contain, 58%`,
    //   ['backgroundPosition']: `calc(100% - 4.5rem) top, 95% center`,
    ['backgroundColor']: `var(--color-bg-secondary)`,
  },
}

const overrides: NestedRecord = {
  title: {
    fontSize: '3.125rem',
    maxWidth: '32.5625rem',
  },
  subTitle: {
    fontSize: '1.125rem',
    maxWidth: '32.5625rem',
    lineHeight: '1.575rem',
  },
}

const CareerPage = () => {
  return (
    <div>
      <Banner {...pageData} overrides={overrides} />
    </div>
  )
}

export default CareerPage
