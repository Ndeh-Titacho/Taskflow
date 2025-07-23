import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { Toaster } from 'sonner'
import { ActiveMenuProvider } from './contexts/ActiveMenuContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ActiveMenuProvider>
      <App />
      </ActiveMenuProvider>
      <Toaster />
    </AuthProvider>
    
  </StrictMode>,
)
