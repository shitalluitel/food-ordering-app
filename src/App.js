import React, {Fragment, useContext} from "react";
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart";
import {CartItemContextProvider} from "./store/CartItemContext";


function App() {
    const cartCtx = useContext(CartContext);

    return (
        <CartItemContextProvider>
            {cartCtx.showCart && <Cart/>}
            <Header/>
            <main>
                <Meals/>
            </main>
        </CartItemContextProvider>
    );
}

export default App;
