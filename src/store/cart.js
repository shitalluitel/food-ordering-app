import React, {useState} from "react";

const CartContext = React.createContext(
    {
        showCart: false,
        onClick: () => {},
        onClose: () => {}
    }
)

export const CartContextProvider = (props) => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(prevState => {
            return !prevState
        })
    }

    return (
        <CartContext.Provider
            value={{
                showCart: showCart,
                onClick: showCartHandler,
                onClose: showCartHandler
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;