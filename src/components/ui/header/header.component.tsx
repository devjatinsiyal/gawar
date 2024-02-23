/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './header.module.scss'
import { LogoImage } from '@/components/shared/icon-image/icon-image.component'
import CardButton from '@/components/shared/card-button/card-button.component'
interface HeaderProps {
  title?: string
  sticky?: boolean
}

const stickyStyles: Record<string, string | number> = {
  position: 'sticky',
  top: 0,
  zIndex: 999,
}

const { header, logo, nav__links, cta, menu, active } = styles

const Header: FC<HeaderProps> = ({ title: headerTitle, sticky }) => {
  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: '/about-us' },
    { name: 'Projects', link: '/projects' },
    { name: 'Investors', link: '/investors' },
  ]
  const pathname = usePathname()

  useEffect(() => {
    const doc = window.document
    const menuOpen = doc.querySelector('.menu')
    const menuClose = doc.querySelector('.close')
    const overlayElement = doc.querySelector('.overlay')

    menuOpen?.addEventListener('click', () => {
      overlayElement?.classList.add('overlay--active')
    })

    menuClose?.addEventListener('click', () => {
      overlayElement?.classList.remove('overlay--active')
    })
    return () => {
      menuOpen?.removeEventListener('click', () => {
        overlayElement?.classList.add('overlay--active')
      })
      menuClose?.removeEventListener('click', () => {
        overlayElement?.classList.remove('overlay--active')
      })
    }
  }, [])
  return (
    <>
      <header className={header} style={sticky ? stickyStyles : {}}>
        <a className={logo} href='/'>
          <LogoImage />
        </a>
        <nav>
          <ul className={nav__links}>
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <Link
                  className={pathname === link ? active : ''}
                  href={link}
                  key={name}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <CardButton
          title='Lets talk'
          onClick={() => {
            console.log('working')
          }}
        />
        {/* <Link className={cta} href='#'>
          Lets talk
        </Link> */}
        <p className={`${menu} ${cta}`}>Menu</p>
      </header>
    </>
  )
}

export default Header
