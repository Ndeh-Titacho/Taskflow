import { useContext, createContext, useState} from "react";

interface ActiveMenuContextType {
  activeMenu: boolean;
  setActiveMenu: (visible: boolean) => void;
}

export const ActiveMenuContext = createContext<ActiveMenuContextType | undefined>(undefined)

export const ActiveMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children}) => {
    const [activeMenu, setActiveMenu] = useState<boolean>(true)

    const value: ActiveMenuContextType = {
        activeMenu,
        setActiveMenu
    }


return(
    <ActiveMenuContext.Provider value={value}>
      {children}
    </ActiveMenuContext.Provider>
)
}

export const useActiveMenu = () =>{
    const context = useContext(ActiveMenuContext)
    if(context === undefined){
        throw new Error( 'useActiveMenu must be used within the ActiveMenuProvider')
    }
    return context
}