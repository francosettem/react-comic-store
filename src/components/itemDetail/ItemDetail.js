import { ItemCount } from '../itemCount/ItemCount';
import './ItemDetail.css';

export const ItemDetail = ({detail})=> {

    return (
        <div className="itemDetail">
        <img className="itemDetail__image" src={detail.thumbnailUrl} alt="" />
        <p className="itemDetail__title">{detail.title}</p>
        <p className="itemDetail__description">{detail.description}</p>
        <p className="itemDetail__category">Category: {detail.category}</p>
        <p className="itemDetail__price">Price: ${detail.price}</p>
        <ItemCount initial={1} stock={detail.stock}/>
        </div>
    )    



}