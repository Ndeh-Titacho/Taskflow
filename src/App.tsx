
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { LoginPage } from './pages/Auth/LoginPage'
import { RegisterPage } from './pages/Auth/RegisterPage'
import { PrivateRoutes } from './PrivateRoutes'
import { DashboardPage } from './pages/Dashboard/DashboardPage'
import { ProjectsPage } from './pages/Projects/ProjectsPage'
import { SettingsPage } from './pages/Settings/SettingsPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
 

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />

        {/* Protected Routes */}
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<DashboardPage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/projects' element={<ProjectsPage/>}/>
          <Route path='/projects/:id' element={<DashboardPage/>}/>
          <Route path='/settings' element={<SettingsPage/>}/>
        </Route>

        {/* 404 routes */}
        <Route path='*' element={<NotFoundPage/>}/>

       
      </Routes>
    </Router>
   
  )
}

export default App
