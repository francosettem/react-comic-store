import './Item.css';
import { NavLink } from 'react-router-dom';

export const Item = ({item}) => {

    const category = item.category;

    return (
        <div className="Item">
        <img className="Item__image" src={item.thumbnailUrl} alt="" />
        <p className="Item__title">{item.title}</p>
        <p className="Item__description">{item.description}</p>
        <p className="Item__category">Category: {category.toUpperCase()}</p>
        <p className="Item__price">Price: ${item.price}</p>
        <NavLink to={`/item/${item.id}`}>
        <button className="btn">More info</button>
        </NavLink>
        </div>
    )

}