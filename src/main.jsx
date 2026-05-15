import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { router } from './routes/router'
import FriendProvider from './Context/FriendProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <FriendProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </FriendProvider>
    
  </StrictMode>,
)
