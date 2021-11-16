import "./Cart.css";
import { useCart } from '../../contexts/CartContext';

export const Cart = () => {

    const {cartStatus, removeItem, clear} = useCart();

return (

    <div className="cart">
        {cartStatus ? cartStatus.map((details, quantity) => 
        <>
        <div className="cartProduct" key={details.id} details={details} quantity={quantity}>
        <img  className="cartProduct__image" src={details.thumbnailUrl} alt="" />
        <p>Product: <b>{details.title}</b></p>
        <p>Quantity: {details.quantity}</p>
        <p>Total: ${details.price * details.quantity}</p>
        <button onClick={() => removeItem(details.id)} className='close'>Remove from Cart</button>
        </div>

        <button onClick={clear}>Clear cart</button>
        </>
        ) 
        : 
        <p>Nada en el carrito</p>}
    </div>
)


}