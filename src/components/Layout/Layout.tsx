import { type  ReactNode } from 'react'
import { Header } from './Header'
import { SideBar } from './SideBar'
import { Outlet } from 'react-router-dom'

  interface LayoutProps {
        children: ReactNode
    }

export const Layout: React.FC<LayoutProps> = ({children}) => {

  
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <div className='flex-1 flex relative'>
        <SideBar />
        <main className='flex-1 p-6 bg-white overflow-x-hidden'>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
