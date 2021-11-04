import { Item } from "../item/Item";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import products from "../../JSON/products.json";
import { useParams } from "react-router";

export const ItemList = () => {
    const {category} = useParams();
    const [items, setItems] = useState(null);

    useEffect(() => {
        const myPromise = new Promise(function(resolve) {
            setTimeout(() => {
                resolve(products)
            }, 100);
        });      
    
        myPromise.then(resolve => {
                console.log(resolve);
                console.log("Los productos se cargaron correctamente 🙂");
               category ? setItems(resolve.filter(r => r.category === category)) : setItems(resolve);
            })
      }, [category]);

    return (
    <>
    {items ? (items.map(item => <Item key={item.id} item={item}/>)) : (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
    </>
    )
    

}