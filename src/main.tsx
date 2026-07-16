import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize Google Tag Manager
declare global {
  interface Window {
    dataLayer: any[]
  }
}

window.dataLayer = window.dataLayer || []
function gtag(...args: any[]) {
  window.dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'GTM-MQJ55HGX')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
