import { type FC, type ReactNode } from 'react'
import Header from '@/components/ui/header/header.component'
import Footer from '@/components/ui/footer/footer.component'
interface MainLayoutProps {
  children: ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <>
    <Header sticky={true} />
    {children}
    <Footer />
  </>
)

export default MainLayout
