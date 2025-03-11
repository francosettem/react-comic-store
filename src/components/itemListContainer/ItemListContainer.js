import './ItemListContainer.css';
import { ItemList } from "../itemList/ItemList"; 

export const ItemListContainer = ({children}) => {


    return (

        <section className="listContainer">
            
        <div className="listContainer__content">

        {children}

        <ItemList/>

        </div>

        

        </section>
    
    )




}