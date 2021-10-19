import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemList } from './components/itemList/ItemList';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
          <ItemList/>
        </ItemListContainer>

    </div>
  )
}

export default App;
