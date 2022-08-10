import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import CartItemContext from "../../store/CartItemContext";

const HeaderCartButton = (props) => {
    const cartItemCtx = useContext(CartItemContext);
    const numberOfCartItems = cartItemCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);

    return (<button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>)
}

export default HeaderCartButton;
