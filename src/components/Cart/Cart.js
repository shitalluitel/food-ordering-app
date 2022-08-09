import styles from './Cart.module.css';
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const cartItems = <ul>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(
        (item) => <li key={item.id}>{item.name}</li>
    )}</ul>;

    return (
        <Modal onClose={cartCtx.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={cartCtx.onClose}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;