import './NavBar.css';
import { CartWidget } from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {

    return (
 <nav className="navBar">
     <NavLink to="/">      
     <span className="navBar__title">Comic Store</span>
     </NavLink>

     <ul className="navBar__menu">
         <NavLink to="/">      
          <li className="Menu__item">Home</li>
          </NavLink>
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
        <NavLink to="/cart"><CartWidget /></NavLink>
    </ul>      

 </nav>
    );

}