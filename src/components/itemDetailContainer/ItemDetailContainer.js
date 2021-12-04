import { useEffect, useState } from "react";
import {ItemDetail} from "../itemDetail/ItemDetail";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from '../../firebase';


export const ItemDetailContainer = () => {

    const {itemId} = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
        const db = getFirestore();
     getDocs(collection(db,"items")).then
        (
        (snapshot)=> {
            if(itemId){
                const result = snapshot.docs.map((doc)=> doc.data()).find(x => x.id === Number(itemId));
                setDetails(result)
            }
        }
        );
    }, [itemId]);


    /*     getData.then(resolve => {
                console.log(resolve);
                console.log("Detalles de productos cargados correctamente 🙂");
                setDetails(resolve.find((item) => item.id === Number(itemId)));
                }) */


    return (
    <>
    {details ? <ItemDetail details={details} key={details.id} /> : <center><Loader type="Puff" color="#00BFFF" height={100} width={100} /></center>}
    </>
    )
    

}