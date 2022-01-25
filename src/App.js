import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { useState } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  const [products, setProducts] = useState([
    {name:"Cerveza Andes IPA lata 473", brand:"Andes"},
    {name:"Cerveza Andes Negra lata 473", brand:"Andes"}, 
    {name:"Cerveza Andes Roja lata 473", brand:"Andes"}
  ])

  return (
    <div className="App">

      <header>
        <NavBar />
      </header>

      <main>
        <ItemListContainer/>
      </main>

      <footer>
        <Footer mensaje="Aquí habrá un footer bonito" />
      </footer>

    </div>
  );
}

export default App;
