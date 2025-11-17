import "./MyButton.css"

const MyButton = () => {
  return (
    <button className="bouton">I'm a button</button> // si on met seulement un seul élément il y a pas bs de fermer et ouvrir avec des <>
  );
}


export default  MyButton // on ecrit comme ca psq c pas le principal et on peut exporter plusieurs functions mais qd c'en est avec des noms on ecrit sans le default et on met le nom de la function avec des accolades
  