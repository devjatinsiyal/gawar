'use client'
import { type FC } from 'react'
import Link from 'next/link'
import { FooterImage } from '@/components/shared/icon-image/icon-image.component'
import styles from './footer.module.scss'
import { usePathname } from 'next/navigation'

const { footer__container, footer, content, title, link, bg, active } = styles

const navLinks = [
  [
    { name: 'Home', link: '/' },
    { name: 'Board of Directors', link: '/#board-of-directors' },
    { name: 'Media & News', link: '/#media-news' },
  ],
  [
    { name: 'About Us', link: '/about-us' },
    { name: 'Key Management Team', link: '/key-management-team' },
    { name: 'Career', link: '/career' },
  ],
  [
    { name: 'Projects', link: '/projects' },
    { name: 'Investors', link: '/investors' },
    { name: 'Contact Us', link: '/contact-us' },
  ],
]
const Footer: FC = () => {
  const pathname = usePathname()
  return (
    <footer className={footer__container}>
      <section className={footer}>
        <div className={content}>
          <div className={title}>Committed for quality & timely execution</div>
        </div>
        <div className={content}>
          {/* <div className={tab}></div> */}
          {navLinks[0].map(({ name, link: href }) => (
            <li key={name}>
              <Link
                className={`${link} ${pathname === href ? active : ''}`}
                href={href}
                key={name}>
                {name}
              </Link>
            </li>
          ))}
        </div>
        <div className={content}>
          {/* <div className={tab}></div> */}
          {navLinks[1].map(({ name, link: href }) => (
            <li key={name}>
              <Link
                className={`${link} ${pathname === href ? active : ''}`}
                href={href}
                key={name}>
                {name}
              </Link>
            </li>
          ))}
        </div>
        <div className={content}>
          {/* <div className={tab}></div> */}
          {navLinks[2].map(({ name, link: href }) => (
            <li key={name}>
              <Link
                className={`${link} ${pathname === href ? active : ''}`}
                href={href}
                key={name}>
                {name}
              </Link>
            </li>
          ))}
        </div>
      </section>
      <div className={bg}>
        <FooterImage />
      </div>
    </footer>
  )
}

export default Footer
