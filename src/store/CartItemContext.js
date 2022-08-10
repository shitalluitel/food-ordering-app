import React, {useReducer} from "react";

const CartItemContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {
    },
    removeItem: (id) => {
    }
})

const defaultCartState = {items: [], totalAmount: 0}

const cartItemReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
            const updateItems = state.items.concat(action.item);

            return {items: updateItems, totalAmount: updatedTotalAmount}

        case 'REMOVE_ITEM':
            const removedItems = state.items.filter( (item) => {
                return item.id === action.id;
            })
            const removedTotalAmount = removedItems.reduce((previousValue, item) => {
                return previousValue + item.amount * item.price
            },0)
            return {items: removedItems, totalAmount: removedTotalAmount}
        default:
            return defaultCartState;
    }
}

export const CartItemContextProvider = (props) => {
    const [cartItems, dispatchCartItem] = useReducer(cartItemReducer, defaultCartState);
    const addItemHandler = (item) => {
        dispatchCartItem({type: 'ADD_ITEM', item: item});
    }

    const removeItemHandler = (id) => {
        dispatchCartItem({type: 'REMOVE_ITEM', id: id});
    }

    const cartContext = {
        items: cartItems.items,
        totalAmount: cartItems.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartItemContext.Provider value={cartContext}>{props.children}</CartItemContext.Provider>
    )
}

export default CartItemContext