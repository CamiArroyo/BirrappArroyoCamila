import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layouts/Layout';
import NoPage from './pages/NoPage';
import ItemDetailContainer from './components/containers/ItemDetailContainer';
import Category from './pages/Category';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import EditItem from './pages/EditItem';
import { CartProvider } from './contexts/CartContext';
import { auth } from './firebase';
import { useState, useEffect } from 'react';
import SignIn from './components/authentication/SignIn';

const App = () => {

  const [user, setUser] = useState(() => auth.currentUser)
  const [init, setInit] = useState(true)

  useEffect(() => {

    const userListener = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }

      if (init) {
        setInit(false)
      }
    })

    return userListener

  }, [init]);

  return (
    <>
    { user ? 
    (
      <CartProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Layout/> }>
              <Route index element={ <Home /> }/>
              <Route path="/product/:id" element={ <ItemDetailContainer/> }/>
              <Route path="/category/:name" element={ <Category/> }/>
              <Route path="/cart" element={ <Cart /> }/>
              <Route path="*" element={ <NoPage /> }/>
              <Route path="/additem" element={<AddItem />} />
              <Route path="/edititem/:id" element={<EditItem />} />  
            </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    ) :
  <SignIn />}
  </>


  );
  
}

export default App;
