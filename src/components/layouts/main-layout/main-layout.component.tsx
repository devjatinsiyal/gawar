import { type FC, type ReactNode } from 'react'
import styles from './main-layout.module.scss'
import Header from '@/components/ui/header/header.component'
import Footer from '@/components/ui/footer/footer.component'
import Banner from '@/components/ui/main-banner/main-banner.component'
interface MainLayoutProps {
  children: ReactNode
}

const { mainContainer } = styles

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header sticky={true} />
    {children}
    <Footer />
  </>
)

export default MainLayout
