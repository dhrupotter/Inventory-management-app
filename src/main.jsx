import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProductsProvider } from './data.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ProductsProvider>
    <Router>
      <App />
    </Router>
  </ProductsProvider>
  /* </React.StrictMode>, */
)
