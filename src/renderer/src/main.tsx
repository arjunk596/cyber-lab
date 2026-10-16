import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './Sass/index.scss'
import { createHashRouter, RouterProvider } from 'react-router'
import Header from './Layouts/Header'
import { Toaster } from 'react-hot-toast'

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster
      position='top-center'
      toastOptions={{
        style: {
          background: 'var(--color-surface-2)',
          color: 'var(--color-on-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: '8px',
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
        },
        success: {
          iconTheme: { primary: 'var(--color-success)', secondary: '#fff' },
        },
        error: {
          iconTheme: { primary: 'var(--color-danger)', secondary: '#fff' },
        },
        loading: {
          iconTheme: { primary: 'var(--color-primary)', secondary: 'var(--color-primary-fixed-dim)' },
        },
      }}
    />
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
)
