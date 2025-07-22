import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext"
import { Layout } from "./components/Layout/Layout"


export const PrivateRoutes: React.FC = () => {

  const { currentUser,loading } = useAuth()
  

  if(loading){
    return <p> Loading app....</p>
  }

  if ( !currentUser) {
    return <Navigate to="/login" replace/>
  }

  return (
    <div>
      <Layout>
        <Outlet/>
      </Layout>
    </div>
  )
}
