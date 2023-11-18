import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/app/App'
import './index.css'
import FooterLayout from './layouts/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FooterLayout />
  </React.StrictMode>,
)
