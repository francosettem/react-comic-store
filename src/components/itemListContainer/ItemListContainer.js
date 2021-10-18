import './ItemListContainer.css';

export const ItemListContainer = ({children}) => {


    return (
        <section className="listContainer">

        <div className="listContainer__content">

        {children}

        </div>

        </section>
    )




}