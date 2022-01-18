import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Boton from './components/Boton';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">

      <header>
        <NavBar />
      </header>

      <main>
        <ItemListContainer titulo="Nuestros productos" />
      </main>

      <footer>
        <Footer mensaje="Aquí habrá un footer bonito" />
      </footer>

    </div>
  );
}

export default App;
