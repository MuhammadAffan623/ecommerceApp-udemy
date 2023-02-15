import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [isCartShown,setIsCartShown]= useState(false)
  const showCart = ()=>{
    setIsCartShown(true)
  }
  const hideCart = () =>{
    setIsCartShown(false)
  }
  return (
    <CartProvider>
      { isCartShown && <Cart onClose={hideCart} />}
      <Header onShow={showCart} />
      <main>
        <Meal/>
      </main>
      </CartProvider>
  );
}

export default App;
