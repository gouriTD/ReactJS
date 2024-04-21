import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Thus basically we make use of ReactDOM.createRoot, to get the rootelement and then we call render method to render the htnl element coming from the App component.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
