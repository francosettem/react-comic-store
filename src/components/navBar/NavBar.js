import './NavBar.css';

export const NavBar = () => {

    return (
 <nav className="navBar">

     <span className="navBar__title">Comic Store</span>

     <ul className="navBar__menu">
        <li>Home</li>
        <li>Featured</li>
        <li>Categories</li>
        <li>About Us</li>
    </ul>


 </nav>
    );



}