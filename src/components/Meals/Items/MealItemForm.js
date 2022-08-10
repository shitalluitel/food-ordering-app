import React, {useRef, useState} from "react";
import styles from './MealItemForm.module.css';
import Input from "../../UI/Input";


const MealItemForm = (props) => {
    const amountRef = useRef();
    const [invalidAmount, setInvalidAmount] = useState(false);

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setInvalidAmount(true)
            return
        }
        setInvalidAmount(false)
        props.addToCart(enteredAmountNum)
    };

    return (
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <Input ref={amountRef} label="Amount" input={{
                id: "amount_" + props.id,
                type: "number",
                // min: '1',
                // max: '5',
                step: '1',
                defaultValue: '1',
                name: 'amount'
            }}/>
            <button type="submit">+ Add</button>
            {invalidAmount && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;