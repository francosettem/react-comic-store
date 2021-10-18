import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemCount } from './components/itemCount/ItemCount';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
          <ItemCount  initial={1} stock={7}/>
        </ItemListContainer>

    </div>
  )
}

export default App;
