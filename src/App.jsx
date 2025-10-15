
import React from 'react';

function App() {
  
  return (
   <button>test</button>
    
  )
}

function MyButton() {
  return (
    <button>I'm a button</button> // si on met seulement un seul élément il y a pas bs de fermer et ouvrir avec des <>
  );
}
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export function ShoppingList() { // on peut aussi exporter une function comme ca et c plus comme ca que c juste
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen' // si c un fruit tu le mets en magenta sn en vert
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}


export { MyButton } // on ecrit comme ca psq c pas le principal et on peut exporter plusieurs functions mais qd c'en est avec des noms on ecrit sans le default et on met le nom de la function avec des accolades
  
export default App
