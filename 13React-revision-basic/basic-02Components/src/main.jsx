import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import App from './App'
const rootElement = document.getElementById('root')

// ReactDOM.render(component,rootElement)
ReactDOM.createRoot(rootElement).render(
 
    <StrictMode>
      <App />
    </StrictMode>
)