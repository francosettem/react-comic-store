import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../contexts/CartContext.js';
import './CartWidget.css';

export const CartWidget = () => {

    const { cartStatus} = useCart();
    const added = cartStatus.reduce((total, item) => total + item.counter, 0);

    return  (   
    <li className="Menu__shopping Menu__item">
        Basket
        <div className="Shopping__cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            {/* <span className="Shopping__cart--quantity">0</span> */}
            {added !== 0 && (
				<span className="Shopping__cart--quantity">
					{added}
				</span>
			)}
        </div>
    </li>);




}