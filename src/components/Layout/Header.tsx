import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Plus,Bell,Menu, Search} from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { useActiveMenu } from "../../contexts/ActiveMenuContext"
import { useIsMobile } from "../../Hooks/useIsMobile"


export const Header = () => {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const {activeMenu, setActiveMenu } = useActiveMenu()
  const isMobile  = useIsMobile()

  const handleLogout = async () => {
    try {
      await logout()
      alert("Logged out")
    } catch (error: any) {
      setError(error)
    }
  }
  return (
  <header className="flex justify-around items-center gap-4 h-16 bg-white border-b border-gray-200  sticky top-0 z-80">
  
   {/* Menu and app name */}
   <div className="flex justify-between gap-4">
{ isMobile && (<div>
      <Button className="drop-shadow-black" variant="default" onClick={()=>{setActiveMenu(!activeMenu)}} >
        <Menu  />
      </Button>
    </div>)}


    <div className="flex justify-between gap-4">
<div className="bg-blue-500 rounded-xl flex items-center justify-center h-8 w-8 text-white font-bold">
  TF
</div>
<div className="flex items-center text-gray-600 font-bold text-xl">
  TaskFlow
</div>
    </div>
   </div>
    
    
    {/* Search input field */}
    <div className="hidden md:flex items-center ">
      <Search className="absolute pl-3 text-gray-400" />
      <Input placeholder="Search..." className="md:w-80 pl-10 border-0  bg-muted/50 focus:bg-background transition-colors" />
    </div>
    <div className="flex justify-between gap-4">
<div>
  <Button className="border !bg-blue-500 text-white rounded-xl" variant="secondary">
    <Plus/> 
    <span className="hidden md:inline"> New Task</span>
    </Button>
</div>
<div>
  <Bell />
</div>
<div>
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
</div>
    </div>
  </header>    
   
  )
}
