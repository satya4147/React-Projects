import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';
import Cart from './components/Cart/CartItems';
import {  useState } from 'react';
import CartProvider from './components/Store/Cart_Provider';

function App() {

  const [showCart , setShowCart] = useState(false)

    const ShowCartHandler = () =>{
      setShowCart(true)
    }

      const hiddenShowCartHandler  = () =>{
        setShowCart(false)
      }

  return (
    <CartProvider>
     { showCart && <Cart onClsoe ={hiddenShowCartHandler} />}
      <Header onShowCart = {ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
