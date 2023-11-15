import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import SideNav from '@/components/SideNav/SideNav'
import SideNavItem from '@/components/SideNavItem/SideNavItem'

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Zachery Studer",
  description: "Zachery Studer's Personal Site"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.className} flex flex-row p-8 bg-gradient-to-br from-emerald-300 via-teal-800 to-stone-600 bg-fixed text-slate-600`}>
        <SideNav>
          <SideNavItem text="About Me" href="/"/>
          <SideNavItem text="My Work" href="/work" />
          <SideNavItem text="Let's Talk Books" href="/books" />
        </SideNav>
        {children}
      </body>
    </html>
  )
}
