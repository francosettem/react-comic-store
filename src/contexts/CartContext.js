import { createContext, useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{

const [cartStatus, setCartStatus] = useState([]);


const addItem = (details, quantity) =>{
    const isInCart = cartStatus.some((product) => product.id === details.id);
		if (details.stock >= 0) {
			if (!isInCart) {
				details.stock = details.stock - quantity;
				const newItem = {
					...details,
					stock: details.stock,
					counter: quantity,
				};

				setCartStatus([...cartStatus, newItem]) 
			} else {
				const foundedItem = cartStatus.find(
					(product) => product.id === details.id
				);
				foundedItem.counter = foundedItem.counter + quantity;
				setCartStatus([...cartStatus]);
			}
		}

}

const removeItem = (id)=>{

    setCartStatus(cartStatus.filter((details) => details.id !== id));

}

const clear = () => {
    setCartStatus([]);
};

const buy = () => {
	setCartStatus([]);
	prompt("Last step, type your email right here")
	alert(`Thank you! The invoid is coming to your email soon. 😂`);
};



useEffect(()=>{
    console.log(...cartStatus);
}, [cartStatus])

return (
    <CartContext.Provider value={{cartStatus, addItem, removeItem, clear, buy}}>
        {children}
    </CartContext.Provider>

)



}