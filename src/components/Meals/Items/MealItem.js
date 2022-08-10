import React, {useContext} from "react";
import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import CartItemContext from "../../../store/CartItemContext";

const MealItem = (props) => {
    const meal = props.meal;
    const price = `$${meal.price.toFixed(2)}`
    const cartItemCtx = useContext(CartItemContext);

    const addItemHandler = (quantity) => {
        const updatedMeal = {amount: quantity, ...meal}
        cartItemCtx.addItem(updatedMeal)
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{meal.name}</h3>
                <div className={styles.description}>{meal.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.meal.id} addToCart={addItemHandler}/>
            </div>
        </li>
    )
}

export default MealItem;