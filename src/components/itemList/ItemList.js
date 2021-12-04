import { Item } from "../item/Item";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useParams } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from '../../firebase';

export const ItemList = () => {
    const {category} = useParams();
    const [items, setItems] = useState(null);

    
        useEffect(()=> {

        const db = getFirestore();
        getDocs(collection(db,"items")).then
        (
            (snapshot)=> {
                if(category){
                    const result = snapshot.docs.map((doc)=> doc.data()).filter(x => x.category === category);
                    setItems(result)
                }else{
                    setItems(snapshot.docs.map((doc)=> doc.data()))
                }
            }
            );
         }, [category]);
    return (
    <>
    {items ? (items.map(item => <Item key={item.id} item={item}/>)) : (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
    </>
    )
    // const result = items.find(x => x.id == id);
    // {result ? (result.map(item => <Item key={item.id} item={item}/>)) : (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}

}