import { ItemCount } from '../itemCount/ItemCount';
import './ItemDetail.css';
import { useState } from 'react/cjs/react.development';
import { NavLink } from 'react-router-dom';

export const ItemDetail = ({details})=> {

    const [flag, setFlag] = useState(true);

        const onAdd = (counter)=> {
            setFlag(false);
            alert("Agregaste " + counter + " producto/s a el carrito")
              };
              

    return (
        <div className="itemDetail">
        <img className="itemDetail__image" src={details.thumbnailUrl} alt="" />
        <p className="itemDetail__title">{details.title}</p>
        <p className="itemDetail__description">{details.description}</p>
        <p className="itemDetail__category">Category: {details.category}</p>
        <p className="itemDetail__price">Price: ${details.price}</p>
        {flag ? <ItemCount initial={1} stock={details.stock} onAdd={onAdd}/> : <NavLink to="/cart"><button>Go to basket</button></NavLink>}
        </div>
    )    



}