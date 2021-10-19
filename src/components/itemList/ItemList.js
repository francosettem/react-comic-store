import { Item } from "../item/Item";
import products from '../../JSON/products.json';
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

export const ItemList = () => {

    const [items, setItems] = useState();

    useEffect(() => {
        const myPromise = new Promise(function(resolve) {
            setTimeout(() => {
                resolve(products)
            }, 3000);
        });      
    
        myPromise.then(resolve => {
                console.log(resolve);
                console.log("Los productos se cargaron correctamente 🙂");
                setItems(resolve);
            })
      }, []);


    return (
    <>
    {items ? (items.map(item => <Item key={item.id} item={item}/>)) : (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
    </>
    )
    

}