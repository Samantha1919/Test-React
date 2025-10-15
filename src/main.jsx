import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css' // comment on definit le fichier css sur quel
import App from './App.jsx'
import { ShoppingList } from './App.jsx'
import { MyButton } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ShoppingList/>
    <MyButton/>
  </StrictMode>,
)
