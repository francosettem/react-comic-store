import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './CartWidget.css';

export const CartWidget = () => {

    const [quantity, setQuantity] = useState(0);

    return  (
    <li className="Menu__shopping Menu__item">Basket
        <div className="Shopping__cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="Shopping__cart--quantity">{quantity}
            </span>
        </div>
    </li>);




}