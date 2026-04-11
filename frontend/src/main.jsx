import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { HomeContentProvider } from './context/HomeContentContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <HomeContentProvider>
        <App />
      </HomeContentProvider>
    </ShopContextProvider>
  </BrowserRouter>,
)
