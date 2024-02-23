import React, { CSSProperties } from 'react'
import Banner from '@/components/ui/main-banner/main-banner.component'
import MediaFullWidth from '@/components/ui/media-full-width/media-full-width.component'
interface PageDataInterface {
  title: string
  subTitle: string
  cta: string
  background?: CSSProperties
  overrides?: Record<string, CSSProperties>
}

const pageData: PageDataInterface = {
  title: 'Building the infra for tomorrow',
  subTitle: 'Premier Player in Expressways, Bridges & Tunnels across India',
  cta: 'Know more',
  background: {
    backgroundImage: `url('/images/gawar-g.svg'), url('/images/home-main-banner.svg')`,
    backgroundSize: `contain, 58%`,
    backgroundPosition: `calc(100% - 4.5rem) top, 95% center`,
  },
  //   overrides:{
  //     // cta: {
  //     //     minWidth:'200px'
  //     // }
  //   }
}

const HomePage = () => {
  return (
    <>
      <Banner {...pageData} />
      <MediaFullWidth />
    </>
  )
}

export default HomePage
