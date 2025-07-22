import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"
import { act, useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Plus,Bell,Menu} from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import { useActiveMenu } from "../../contexts/ActiveMenuContext"


export const Header = () => {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const {activeMenu, setActiveMenu } = useActiveMenu()

  const handleLogout = async () => {
    try {
      await logout()
      alert("Logged out")
    } catch (error: any) {
      setError(error)
    }
  }
  return (
  <header className="flex justify-around items-center gap-4 h-16 bg-background border-b border-border shadow-sm sticky top-0 z-50">
    <div>
      <Button className="drop-shadow-black" variant="default" onClick={()=>{setActiveMenu(!activeMenu)}} >
        <Menu  />
      </Button>
    </div>
    <div className="flex justify-between gap-4">
<div className="bg-blue-500 rounded-xl flex items-center justify-center h-8 w-8 text-white font-bold">
  TF
</div>
<div className="flex items-center text-gray-600 font-bold text-xl">
  TaskFlow
</div>
    </div>
    <div className="hidden md:flex items-center ">
      <Input placeholder="Search..." className="md:w-80" />
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
