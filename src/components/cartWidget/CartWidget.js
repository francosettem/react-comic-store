import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

export const CartWidget = () => {

    return  (
    <li className="Menu__shopping Menu__item">
        Basket
        <div className="Shopping__cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="Shopping__cart--quantity">0</span>
        </div>
    </li>);




}