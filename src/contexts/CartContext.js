import { createContext, useContext, useState } from "react"
import { useEffect } from "react/cjs/react.development";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{

const [cartStatus, setCartStatus] = useState([]);

const addItem = (details, quantity) =>{

    setCartStatus([...cartStatus, {...details , quantity}]) 
}

const removeItem = (id)=>{

    setCartStatus(cartStatus.filter((details) => details.id !== id));

}

const clear = () => {
    setCartStatus([]);
};


useEffect(()=>{
    console.log(...cartStatus);
}, [cartStatus])

return (
    <CartContext.Provider value={{cartStatus, addItem, removeItem, clear }}>
        {children}
    </CartContext.Provider>

)



}