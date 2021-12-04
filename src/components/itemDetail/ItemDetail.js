import { ItemCount } from '../itemCount/ItemCount';
import './ItemDetail.css';
import { useEffect, useState } from 'react/cjs/react.development';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export const ItemDetail = ({details})=> {

    const [flag, setFlag] = useState(true);
    const [quantity, setQuantity] = useState(null);
    const {cartStatus, addItem } = useCart();

        const onAdd = (counter)=> {
            setFlag(false);
            alert("Agregaste " + counter + " producto/s a el carrito");
            setQuantity(counter);
        };
              
        useEffect(()=>{
            quantity && 
            addItem(details, quantity);
            setQuantity();
        }, [details, quantity, addItem, cartStatus, setQuantity])

    return (
        <div className="itemDetail">
        <img className="itemDetail__image" src={details.thumbnailUrl} alt="" />
        <p className="itemDetail__title">{details.title}</p>
        <p className="itemDetail__description">{details.description}</p>
        <p className="itemDetail__category">Category: {details.category}</p>
        <p className="itemDetail__price">Price: ${details.price}</p>

        {flag 
        ? 
        <ItemCount initial={1} stock={details.stock} onAdd={onAdd}/> 
        : 
        <>
        <p className="itemDetail__quantity">{details.counter} Products added to cart 😁!</p>
        <NavLink to="/cart"><button className="btn">Go to basket</button></NavLink>
        </>}

            <NavLink to="/"><button className="btn2">Return to index</button></NavLink>

        </div>
    )    



}