import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';

function App() {

  const greeting = "Bienvenido a la Tienda de Comics 🦸"; 
  const containerResume = "No hay productos en el carrito 🤔" ;

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer message={greeting}>
        <span>{containerResume}</span>
        </ItemListContainer>

    </div>
  );
}

export default App;
