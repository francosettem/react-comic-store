import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemList } from './components/itemList/ItemList';
import {ItemDetailContainer} from "./components/itemDetailContainer/ItemDetailContainer";
import {Cart} from "./components/cart/Cart";
import {CartProvider} from "./contexts/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from './firebase';
import { useEffect } from 'react';
import {Error} from "./views/404";

function App() {

  useEffect(()=> {
      const db = getFirestore();
      getDocs(collection(db, "items")).then((snapshot) => {
        console.log(snapshot.docs.map((doc => doc.data())));
      });
 
      }, [])


  return (
    <CartProvider>
    <BrowserRouter>

    <NavBar/>

    <Switch>

    <Route exact path="/">

      <Home/>

    </Route>

    <Route exact path="/category/:category">

    <ItemListContainer>
      <ItemList/>
    </ItemListContainer>

    </Route>

    <Route exact path="/item/:itemId">

      <ItemDetailContainer />

    </Route>

    <Route exact path="/cart">

      <Cart/>

    </Route>

    <Route exact path="*">

      <Error/>

    </Route>

    </Switch>

    </BrowserRouter>
    </CartProvider>
  )
}

export default App;
