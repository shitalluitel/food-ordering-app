import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart";
import CartItemContext from "../../store/CartItemContext";
import CartItem from "./CartItem";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const cartItemCtx = useContext(CartItemContext);
    const totalAmount = `$${cartItemCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartItemCtx.items.length > 1;

    const cartItemRemoveHandler = (id) => {
        cartItemCtx.removeItem(id);
    }

    const cartItemAddHandler = (item) => {
        let newItem = {...item, amount: 1}
        cartItemCtx.addItem(newItem);
    }

    const cartItems = <ul className={styles['cart-items']}>
        {
            cartItemCtx.items.map(
                (item) => <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )
        }
    </ul>;

    return (
        <Modal onClose={cartCtx.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={cartCtx.onClose}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;