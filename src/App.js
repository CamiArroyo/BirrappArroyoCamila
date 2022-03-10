import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';
import ItemDetailContainer from './components/ItemDetailContainer';
import Category from './components/Category';
import Cart from './components/Cart';
import AddItem from './pages/AddItem';
import { CartProvider } from './contexts/CartContext';
import { auth } from './firebase';
import { useState, useEffect } from 'react';
import SignIn from './components/SignIn';

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
