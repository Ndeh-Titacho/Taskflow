import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useActiveMenu } from "../../contexts/ActiveMenuContext";

export const SideBar = () => {

  const { activeMenu, setActiveMenu } = useActiveMenu();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: "📊" },
    { name: 'Tasks', path: '/tasks', icon: "✅" },
    { name: 'Projects', path: '/projects', icon: "📁" },
    { name: 'Settings', path: '/settings', icon: "⚙️" },
  ];
  
  return (
    <div className="w-64 shadow-amber-700 top-0 left-0 bg-white h-full p-4 overflow-auto">
      { activeMenu && (
        <> 
        <div className="flex justify-between">
        <span className="text-xl tracking-tight font-medium text-slate-900"> Dashboard</span>
        <span className="border rounded-full flex items-center" onClick={()=>{setActiveMenu(!activeMenu)}}>
          <X />
        </span>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        { menuItems.map((items) => (
          <Link key={items.name}
          to={items.path}
          className="">
          <span>
            {items.icon}
          </span>
          <span>{items.name}</span>
          </Link>
        ))}
      </div> 
       </>)}
    </div>
  )
}
