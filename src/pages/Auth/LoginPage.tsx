import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "sonner"
export const LoginPage = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const {login,loading } = useAuth()
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
         e.preventDefault()
         setError('') //Reset error state

         try {
            await login(email, password)
            navigate("/dashboard") //Redirect to dashboard on successful login
            toast.success("Login successful")
         } catch (error: any) {
            setError(error.message || "Failed to login")
         }
    }

    if(loading){
        return <div> Authenticating...</div>
    }

    return (
        <>
        <div className="flex flex-col mb-5">
         <p className="text-slate-700 font-extrabold text-3xl">TaskFlow</p>
         <p className="text-gray-500">Sign in to your account</p>
        </div>
        
        <div className="flex flex-col gap-4 border p-4 rounded-lg shadow-md lg:p-8">
            <div className="flex flex-col gap-2 ">
                <p className="font-bold text-2xl text-slate-600">Welcome back</p>
                <p className="text-gray-500">Please enter your credentials to access your <br /> workspace</p>
            </div>
            {/* Conditionally render error message */}
            <div>
                { error && <p className="text-red-600 bg-red-300 p-2 rounded-md">{error}</p> }
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="email" className="  mb-1 font-semibold text-slate-800 pl-3 w-0 mr-2">Email</label>
                    <Input id="email"  value={email}  onChange={ (e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="password" className="mb-1 font-semibold text-slate-800 pl-3 w-0 mr-2">Password</label>
                    <Input id="password" value={password} onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="Password" />
                    <Link to="/forgot-password" className="text-gray-500 mt-2 text-sm font-light border">Forgot your password? </Link>
                </div>
                <div>
                    <Button type="submit" className="mt-3 text-sm w-full !bg-blue-600 hover:!bg-blue-500">Sign in</Button>
                </div>
               
               <div>
                                 <p className="text-gray-500 mt-2 text-sm">Don't have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign up</Link></p>
                               </div>
            </form>
        </div>
       

        </>
    )
}