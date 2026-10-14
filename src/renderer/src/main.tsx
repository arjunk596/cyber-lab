import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './Sass/index.scss'
import { createHashRouter, RouterProvider } from 'react-router'
import Header from './Components/Header'

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
)
