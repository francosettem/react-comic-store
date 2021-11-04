import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemList } from './components/itemList/ItemList';
import {ItemDetailContainer} from "./components/itemDetailContainer/ItemDetailContainer";

function App() {

  return (
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

    </Switch>

    </BrowserRouter>
  )
}

export default App;
