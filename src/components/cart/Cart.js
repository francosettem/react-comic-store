import "./Cart.css";
import { useCart } from '../../contexts/CartContext';
import { NavLink } from "react-router-dom";

export const Cart = () => {

    const {cartStatus, removeItem, clear, buy} = useCart();
    // Cantidad total de Items en mi carrito
    const totalQuantity = cartStatus.reduce((a, b) => a + b.counter, 0);
    // Precio total de items en mi carrito
    const totalPrice= cartStatus.reduce(function (a, b) { return parseInt(a + b.price * b.counter);}, 0);


return (

    <div className="cart">
        {cartStatus.length ? (
        (<>{cartStatus.map((details, counter) => 
            <>
        <div className="cartProduct" key={details} details={details} counter={counter}>
        <img  className="cartProduct__image" src={details.thumbnailUrl} alt="" />
        <p>Product: <b>{details.title}</b></p>
        <p>Quantity: {details.counter}</p>
        <p>Total: ${parseInt(details.price * details.counter)}</p>
        <button onClick={() => removeItem(details.id)} className='close'>Remove from Cart</button>
        </div>
            </>
        )}

        <div className="cartProduct__controls">
        <button onClick={clear}>Clear cart</button>
        <button onClick={buy}>Check Out</button>
        <p>Quantity: {totalQuantity}</p>
        <p>Total: ${totalPrice}</p>
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