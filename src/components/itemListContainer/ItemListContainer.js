import './ItemListContainer.css';

export const ItemListContainer = ({message, children}) => {


    return (
        <section className="listContainer">

        <div className="listContainer__content">

        <span>{message}</span>

        <br/>
        <br/>

        {children}


        </div>

        </section>
    )




}