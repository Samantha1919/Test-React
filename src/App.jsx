
import React from 'react';
import  { ShoppingList }  from './Components/ShoppingList/ShoppingList';
import  MyButton  from "./Components/MyButton/MyButton" // y a pas bd daccolades psq on a fait une fonction flechee et on la exportee differement
import './App.css' // comment on definit le fichier css sur quel

function App() {
  
  return (
    <>
   <ShoppingList/>
   <MyButton/>
    </>
    
  )
}

export default App
