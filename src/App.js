import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aquí se desarrollará mi proyecto final "Birrapp", tienda de cervezas.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <Footer mensaje="Aquí habrá un footer bonito" />

    </div>
  );
}

export default App;
