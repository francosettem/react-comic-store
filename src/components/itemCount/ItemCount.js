import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({initial, stock, onAdd}) =>{

  // initial = 1, stock = 7 
    const [counter, setCounter] = useState(initial)
  
    const onIncrease = () => {
     if(counter < stock){
       setCounter(counter + 1)
     }
     else{
      alert('No puedes agregar mas productos que el stock disponible 😶')
    }
    }
  
    const onDecrease = ()=>{
    if(counter > initial){
      setCounter(counter - 1)
    }
    else{
      alert('No puedes agregar menos de 1 producto al carrito 🙆')
    }
    }


    return (

        <div>
        <div className="Item__counter">
        <button className="Item__button" onClick={onDecrease}>-</button>
        <span className="Item__stock">{counter}</span>
        <button className="Item__button"onClick={onIncrease}>+</button>
        </div>
        <p>Quantity: {stock}</p>
        <button className="Item__button--cart" onClick={() => {onAdd(counter)}}>Add to cart</button>
        </div>
    )







}