import React from "react";
import meals from '../../data/dummyMeals';
import styles from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./Items/MealItem";

const AvailableMeals = (props) => {
    const mealsList = meals.map(meal => <MealItem key={meal.id} id={meal.id} meal={meal}/>)

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}
export default AvailableMeals;