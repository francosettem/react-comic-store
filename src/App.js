import { NavBar } from './components/navBar/NavBar';
import './App.css';
import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { ItemCount } from './components/itemCount/ItemCount';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(1)
  const stock = 7

  const add = () => {
   if(counter < stock){
     setCounter(counter + 1)
   }
   else{
    alert('No puedes agregar mas productos que el stock disponible 😶')
  }
  }

  const remove = ()=>{
  if(counter > 1){
    setCounter(counter - 1)
  }
  else{
    alert('No puedes agregar menos de 1 producto al carrito 🙆')
  }
  }

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer>
          <ItemCount initial={counter} stock={stock} onAdd={add} onRemove={remove} />
        </ItemListContainer>

    </div>
  )
}

export default App;
