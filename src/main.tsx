import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./globals.css"
import './styles/Config.scss'
import { ToastProvider } from './providers/ToastProvider'
import { ThemeProvider } from './components/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <ToastProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ToastProvider>,
  </ThemeProvider>
)
