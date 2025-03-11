import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/home/Home';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemList } from './components/itemList/ItemList';
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from './firebase';
import { useEffect } from 'react';
import { Error } from "./views/404";
import { Checkout } from './components/checkout/Checkout';

function App() {

  // useEffect(() => {
  //   const db = getFirestore();
  //   getDocs(collection(db, "items")).then((snapshot) => {
  //     console.log(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, []);


  return (
    <CartProvider>
      <BrowserRouter basename="/react-comic-store">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/category/:category" element={<ItemListContainer />} />

          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
