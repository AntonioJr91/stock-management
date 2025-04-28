import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductsProvider from './context/ProductsContext.jsx'
import OrdersProvider from './context/OrdersContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ProductsProvider> */}
      {/* <OrdersProvider> */}
      <App />
      {/* </OrdersProvider> */}
    {/* </ProductsProvider> */}
  </StrictMode>,
)
