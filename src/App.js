import React, {Fragment, useContext} from "react";
import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart";


function App() {
    const cartCtx = useContext(CartContext);

    return (
        <Fragment>
            {cartCtx.showCart && <Cart/>}
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
