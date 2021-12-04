import { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({initial, onAdd}) =>{

  // initial = 1, stock = 7 
    const [counter, setCounter] = useState(initial);
    const stock = 3;

    const onIncrease = () => {
     if(counter < stock){
       setCounter(counter + 1)
     }
     else{
      alert('No puedes mas productos 😶')
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
        <button className="Item__button" onClick={onDecrease} disabled={counter<=Number(1)}>-</button>
        <span className="Item__stock">{counter}</span>
        <button className="Item__button"onClick={onIncrease} disabled={counter>=Number(3)}>+</button>
        </div>
        {/* <span>Quantity: {stock}</span> */}
        <button className="btn3" onClick={() => {onAdd(counter)}}>Add to cart</button>
        </div>
    )

}