import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate,Link } from "react-router-dom"
import { toast } from "sonner"
import { EyeClosed,Eye } from 'lucide-react';


export const RegisterPage = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const {loading, register} = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) =>{
      e.preventDefault()
      setError("")

      // Validate password match
      if (password !== confirmPassword) {
        setError("Passwords do not match")
        return
      }

      try {
        await register(email, password)
        navigate('/dashboard')
        toast.success("Account created successfully")
      } catch (error: any) {
        setError( error.message || "Failed to create your account")
      }
  }

  if( loading ){
    return <p>Creating account....</p>
  }
  return (
   
    <>
      <div className="flex flex-col mb-5">
         <p className="text-slate-700 font-extrabold text-3xl">TaskFlow</p>
         <p className="text-gray-500">Create your account</p>
        </div>
        
        <div className="flex flex-col gap-4 border p-4 rounded-lg shadow-md lg:p-8">
            <div className="flex flex-col gap-2 ">
                <p className="font-bold text-2xl text-slate-600">Get Started</p>
                <p className="text-gray-500">Join thousands of teams already using TaskFlow</p>
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
                    <div className="relative ">
                    <Input id="password" value={password} onChange={ (e) => setPassword(e.target.value) } type={ showPassword ? "text" : "password"} placeholder="Password" />
                    <Button className="absolute right-0 top-0 h-9 w-11 !bg-transparent text-black outline-0" variant="secondary" onClick={() => setShowPassword(!showPassword)}> { showPassword ? <EyeClosed/> : <Eye/> }</Button>
                    </div>
                    
                </div>
                 <div className="flex flex-col mt-4">
                    <label htmlFor="confirmPassword" className="mb-1 font-semibold text-slate-800 pl-3 w-0 mr-2">Confirm Password</label>
                    <div className="relative ">
                    <Input id="ConfirmPassword" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } type={ showPassword ? "text" : "password"} placeholder="Confirm Password" />
                    <Button className="absolute right-0 top-0 h-9 w-11 !bg-transparent text-black outline-0" variant="secondary" onClick={() => setShowPassword(!showPassword)}> { showPassword ? <EyeClosed/> : <Eye/> }</Button>
                    </div>
                    
                </div>
                <div>
                    <Button type="submit" className="mt-3 text-sm w-full !bg-blue-600 hover:!bg-blue-500">Create account</Button>
                </div>

                <div>
                  <p className="text-gray-500 mt-2 text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link></p>
                </div>
               
            </form>
        </div>
       
    </>
  )
}
