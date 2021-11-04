import { ItemCount } from '../itemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({details})=> {

    return (
        <div className="itemDetail">
        <img className="itemDetail__image" src={details.thumbnailUrl} alt="" />
        <p className="itemDetail__title">{details.title}</p>
        <p className="itemDetail__description">{details.description}</p>
        <p className="itemDetail__category">Category: {details.category}</p>
        <p className="itemDetail__price">Price: ${details.price}</p>
        <ItemCount initial={1} stock={details.stock}/>
        </div>
    )    



}