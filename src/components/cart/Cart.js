import "./Cart.css";
import { useCart } from '../../contexts/CartContext';

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
        </div>
        </>)
 
        ) 
        : 
        <div className="empty"> 
        <p>Nada en el carrito 😐 </p>
        <p>Comienza a comprar! 😇 </p>
        </div>}  
    </div>
)


}