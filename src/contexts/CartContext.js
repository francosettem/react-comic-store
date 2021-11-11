import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{

const [cartStatus, setCartStatus] = useState([]);

const addItem = (quantity) =>{
    setCartStatus(quantity) 
}

return (
    <CartContext.Provider value={{cartStatus, addItem }}>
        {children}
    </CartContext.Provider>

)



}