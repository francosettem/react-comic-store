import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({initial, stock}) =>{

  // initial = 1, stock = 7 
    const [counter, setCounter] = useState(initial)
  
    const onAdd = () => {
     if(counter < stock){
       setCounter(counter + 1)
     }
     else{
      alert('No puedes agregar mas productos que el stock disponible 😶')
    }
    }
  
    const onRemove = ()=>{
    if(counter > initial){
      setCounter(counter - 1)
    }
    else{
      alert('No puedes agregar menos de 1 producto al carrito 🙆')
    }
    }

    return (

        <div className="Item">
        <img className="Item__image" src="https://via.placeholder.com/150" alt="" />
        <p className="Item__title">Lorem ipsum</p>
        <div className="Item__counter">
        <button className="Item__button" onClick={onRemove}>-</button>
        <span>{counter}</span>
        <button className="Item__button"onClick={onAdd}>+</button>
        </div>
        <p>Cantidad: {stock}</p>
        <button className="Item__button--cart">Add to cart</button>
        </div>
    )







}