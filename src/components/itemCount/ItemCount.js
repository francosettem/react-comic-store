import './ItemCount.css';

export const ItemCount = ({initial, stock, onAdd, onRemove}) =>{



    return (

        <div className="Item">
        <img className="Item__image" src="https://via.placeholder.com/150" alt="" />
        <p className="Item__title">Lorem ipsum</p>
        <div className="Item__counter">
        <button className="Item__button" onClick={onRemove}>-</button>
        <span>{initial}</span>
        <button className="Item__button"onClick={onAdd}>+</button>
        </div>
        <p>Cantidad: {stock}</p>
        <button className="Item__button--cart">Add to cart</button>
        </div>
    )







}