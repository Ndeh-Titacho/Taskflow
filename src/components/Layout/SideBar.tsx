import { X } from "lucide-react";
import { Link } from "react-router-dom";
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
    <>
      <div className={`
        fixed top-0 left-0 md:sticky 
        ${activeMenu ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        transition-transform duration-300 ease-in-out
        w-64 bg-white h-screen 
        border-r border-gray-200 shadow-sm shadow-lg md:shadow-none
        flex flex-col z-50
      `}>
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-medium text-slate-900">TaskFlow</span>
          <button 
            onClick={() => setActiveMenu(false)} 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {activeMenu && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden z-40" 
          onClick={() => setActiveMenu(false)}
        />
      )}
    </>
  );
};
