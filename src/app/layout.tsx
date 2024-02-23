import { type ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import MainLayout from '@/components/layouts/main-layout/main-layout.component'
import META_DATA from '@/constants/meta-data'
import '@/styles/globals.scss'
const { title, description } = META_DATA

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title,
  description,
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={poppins.className} suppressHydrationWarning>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
