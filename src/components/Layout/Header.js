import {Fragment, useContext} from "react";

import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from "./HeaderCartButton";
import CartContext from "../../store/cart";

const Header = (props) => {
    const cartCtx = useContext(CartContext);

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={cartCtx.onClick} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="A table full of delicious food."/>
            </div>
        </Fragment>
    )
};

export default Header;