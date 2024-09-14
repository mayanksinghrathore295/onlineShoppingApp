
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context.tsx'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

createRoot(document.getElementById('root')!).render(
  <Context>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </Context>
  
)
