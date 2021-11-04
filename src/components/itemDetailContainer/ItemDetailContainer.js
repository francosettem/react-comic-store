import { useEffect, useState } from "react";
import {ItemDetail} from "../itemDetail/ItemDetail";
import products from "../../JSON/products.json";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {

    const {itemId} = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
        const newPromise = new Promise(function(resolve) {
            setTimeout(() => {
                resolve(products)
            }, 100);
        });      


        newPromise.then(resolve => {
                console.log(resolve);
                console.log("Detalles de productos cargados correctamente 🙂");
                setDetails(resolve.find((item) => item.id === Number(itemId)));
                })
      }, [itemId]);


    return (
    <>
    {details ? <ItemDetail details={details} /> : <center><Loader type="Puff" color="#00BFFF" height={100} width={100} /></center>}
    </>
    )
    

}