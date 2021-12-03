import "./Cart.css";
import { useCart } from '../../contexts/CartContext';
import { NavLink } from "react-router-dom";

export const Cart = () => {

    const {cartStatus, removeItem, clear} = useCart();
    
    return (
        
        <div className="cart">
        {cartStatus.length ? (
            (<>{cartStatus.map((details, counter) => 
                <>
        <div className="cartProduct" key={details.id} details={details} counter={counter}>
        <img  className="cartProduct__image" src={details.thumbnailUrl} alt="" />
        <p>Product: <b>{details.title}</b></p>
        <p>Quantity: {details.counter}</p>
        <p>Total: ${details.price * details.counter}</p>
        <button onClick={() => removeItem(details.id)} className='close'>Remove from Cart</button>
        </div>
            </>
        )}

        <div className="cartProduct__controls">
        <button onClick={clear}>Clear cart</button>
        <p>Total: {cartStatus.price}</p>
        </div>
        </>)
 
        ) 
        : 
        <div className="empty"> 
        <p>Cart is empty 😐 </p>
        <p>Start buying! 😇 </p>
        <NavLink to="/"><button>Return to index</button></NavLink>
        </div>}  
    </div>
)


}