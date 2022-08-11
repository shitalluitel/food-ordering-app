import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import styles from './HeaderCartButton.module.css';
import CartItemContext from "../../store/CartItemContext";

const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
    const cartItemCtx = useContext(CartItemContext);
    const {items} = cartItemCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0);

    const btnClasses = `${styles.button} ${buttonIsHighlighted ? styles.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items]);

    return (<button className={btnClasses} onClick={props.onClick}>
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
