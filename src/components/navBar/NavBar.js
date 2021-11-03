import './NavBar.css';
import { CartWidget } from '../cartWidget/CartWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (
 <nav className="navBar">

     <span className="navBar__title">Comic Store</span>

     <div className="toggleMenu">
     <FontAwesomeIcon icon={faBars} />
     </div>

     <ul className="navBar__menu">
         <NavLink to="/">      
          <li className="Menu__item">Home</li>
          </NavLink>
        <li className="Menu__item">Featured</li>
        <NavLink to="/category/comic">
            <li className="Menu__item">Comic</li>
            </NavLink>
            <NavLink to="/category/figure">
            <li className="Menu__item">Figure</li>
            </NavLink>
            <NavLink to="/category/manga">
            <li className="Menu__item">Manga</li>
            </NavLink>
        <NavLink to="/category/merchandising"><li className="Menu__item">Merchandising</li></NavLink>
        <li className="Menu__item">About Us</li>
        <CartWidget />
    </ul>      

 </nav>
    );

}