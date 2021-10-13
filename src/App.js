import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

function App() {

  const greeting = "El carrito está vacio :/"; 

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer props={greeting} />
    </div>
  );
}

export default App;
