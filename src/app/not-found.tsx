import { type FC } from 'react'
import NotFoundBanner from '@/components/ui/not-found-banner/not-found-banner.component'
const pageData = {
  title: 'Hey, We are currently building this page',
  cta: 'Lets take you back',
  background: {
    backgroundImage: `url('/images/not-found-banner.svg')`,
    backgroundSize: `cover`,
    backgroundPosition: `center`,
  },
}

const NotFoundPage: FC = () => {
  return (
    <>
      <NotFoundBanner {...pageData} />
    </>
  )
}

export default NotFoundPage
