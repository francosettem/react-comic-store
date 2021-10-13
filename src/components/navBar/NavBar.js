import './NavBar.css';
import { CartWidget } from '../cartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {

    return (
 <nav className="navBar">

     <span className="navBar__title">Comic Store</span>

     <div className="toggleMenu">
     <FontAwesomeIcon icon={faBars} />
     </div>

     <ul className="navBar__menu">
        <li className="Menu__item">Home</li>
        <li className="Menu__item">Featured</li>
        <li className="Menu__item">Categories</li>
        <li className="Menu__item">About Us</li>
        <CartWidget />
    </ul>      

 </nav>
    );

}