import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Home /> }/>
            <Route path="/product/:id" element={ <ItemDetailContainer/> }/>
            <Route path="/category/:id" element={ <Category/> }/>
            <Route path="*" element={ <NoPage /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
  
}

export default App;
