
import { createContext, useContext, type ReactNode, useState, useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth"
import type {User} from "firebase/auth"
import { auth } from "../firebase/config";

interface AuthContextType {
    currentUser: User | null;
    loading: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;

};

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) =>{
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        //check the state of a user when component mounts
        const userCurrentState = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })

        return () => userCurrentState()
    }, []);

    const register = async(email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async(email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async() => {
        await signOut(auth)
    }

    const value: AuthContextType = {
        currentUser,
        loading,
        register,
        login,
        logout,
    }



    return(
        <AuthContext.Provider value={value}>
            {!loading && children} {/*Only render children when the auth state is known*/}
            </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(context === undefined){
        throw new Error( 'useAuth must be used within the AuthProvider')
    }
    return context
}