import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./globals.css"
import './styles/Config.scss'

import { ThemeProvider } from './components/ThemeProvider'
import { Bounce, ToastContainer } from 'react-toastify'
import { AuthProvider } from './providers/AuthContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ToastContainer
            position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
            transition={Bounce}
        />

        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <AuthProvider>
                <App />
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
)
