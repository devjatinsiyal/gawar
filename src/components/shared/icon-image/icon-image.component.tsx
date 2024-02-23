import { type FC } from 'react'
import Image from 'next/image'

// interface IconProps {
//   color?: string
// }

export const LogoImage: FC = () => (
  <Image
    width='242'
    height='86'
    src='/images/gawar-logo.svg'
    alt='gawar logo'
  />
)

export const FooterImage: FC = () => (
  <Image
    width='1440'
    height='211'
    src='/images/footer-bg.svg'
    alt='Footer BG'
  />
)

export const InfoImage: FC = () => (
  <Image width='16' height='17' src='/images/icons/info.svg' alt='info icon' />
)

export const GawarIcon: FC = () => (
  <Image width='240' height='240' src='/images/gawar-g.svg' alt='gawar icon' />
)

export const ErrorIcon: FC = () => (
  <Image
    width='16'
    height='16'
    src='/images/icons/error.svg'
    alt='Error Icon'
  />
)

export const HomeBanner: FC = () => (
  <Image
    width='240'
    height='240'
    src='/images/icons/gawar-icon.svg'
    alt='home banner'
  />
)

export const ArrowRightImage: FC = () => (
  <Image
    width='20'
    height='20'
    src='/images/utils/next-button.svg'
    alt='arrow right'
  />
)

export const ArrowLeftImage: FC = () => (
  <Image
    width='20'
    height='20'
    src='/images/utils/back-button.svg'
    alt='arrow left'
  />
)
