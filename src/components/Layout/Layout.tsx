import { type  ReactNode } from 'react'
import { Header } from './Header'
import { SideBar } from './SideBar'

  interface LayoutProps {
        children: ReactNode
    }

export const Layout: React.FC<LayoutProps> = ({children}) => {

  
  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <SideBar/>
    </>
  )
}
