import Banner from '@/components/ui/main-banner/main-banner.component'
import { type FC } from 'react'

const pageData = {
  title: 'Coffee with expert?',
  subTitle:
    'We are always on a hunt for young civil engineers and experienced professionals to join our teams',
  cta: 'Get Hired',
  background: {
    //   ['backgroundImage']: `url('/images/gawar-g.svg'), url('/images/home-main-banner.svg')`,
    //   ['backgroundSize']: `contain, 58%`,
    //   ['backgroundPosition']: `calc(100% - 4.5rem) top, 95% center`,
    backgroundColor: `var(--color-bg-secondary)`,
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
const ContactUsPage: FC = () => {
  return (
    <div>
      <Banner {...pageData} overrides={overrides} />
    </div>
  )
}

export default ContactUsPage
