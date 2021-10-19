import { ItemCount } from '../itemCount/ItemCount';
import './Item.css';

export const Item = ({item}) => {

    return (
        <div className="Item">
        <img className="Item__image" src={item.thumbnailUrl} alt="" />
        <p className="Item__title">{item.title}</p>
        <p className="Item__description">{item.description}</p>
        <p className="Item__category">Categoria: {item.category}</p>
        <p className="Item__price">Precio: ${item.price}</p>
        <ItemCount initial={1} stock={item.stock}/>
        </div>
    )

}