import React from 'react'
import ReactDOM from 'react-dom'
import { App, AuthProvider } from '.'
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
