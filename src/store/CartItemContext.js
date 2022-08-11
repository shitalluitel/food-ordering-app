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
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            )
            const existingCartItem = state.items[existingCartItemIndex]
            let updatedItem;
            let updatedItems;

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.item.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItems = state.items.concat(action.item);
            }

            return {items: updatedItems, totalAmount: updatedTotalAmount}
        case 'REMOVE_ITEM':
            const existingCartItemRemoveIndex = state.items.findIndex(
                (item) => item.id === action.id
            )
            const existingItem = state.items[existingCartItemRemoveIndex]
            let deductedTotalAmount = state.totalAmount -  existingItem.price
            let updatedCartItems;

            if (existingItem.amount === 1) {
                updatedCartItems = state.items.filter((item) => item.id !== action.id)
            }else{
                const updatedItem = {...existingItem, amount: existingItem.amount - 1}
                updatedCartItems = [...state.items]
                updatedCartItems[existingCartItemRemoveIndex] = updatedItem
            }
            return {items: updatedCartItems, totalAmount: deductedTotalAmount}
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