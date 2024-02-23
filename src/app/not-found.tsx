import React from 'react'
import NotFoundBanner from '@/components/ui/not-found-banner/not-found-banner.component'
const pageData = {
  title: 'Hey, We are currently building this page',
  cta: 'Lets take you back',
  background: {
    ['background-image']: `url('/images/not-found-banner.svg')`,
    ['background-size']: `cover`,
    ['background-position']: `center`,
  },
}

const NotFoundPage = () => {
  return (
    <>
      <NotFoundBanner {...pageData} />
    </>
  )
}

export default NotFoundPage
