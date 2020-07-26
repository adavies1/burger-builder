import React, { FunctionComponent } from 'react';
import Button from '../../UI/Button/Button';
import { BURGER_INGREDIENT_IDS, BURGER_INGREDIENT_COUNT, BURGER_INGREDIENTS } from '../../../constants';

type OrderSummaryProps = {
    ingredients: BURGER_INGREDIENT_COUNT,
    price: number,
    cancelPurchase: () => void,
    confirmPurchase: () => void
}

const orderSummary:FunctionComponent<OrderSummaryProps> = props => {
    const ingredientSummary = (Object.keys(props.ingredients) as BURGER_INGREDIENT_IDS[])
        .map(ingredient =>
            <li key={ingredient}>
                <span style={{textTransform: "capitalize"}}>
                    {BURGER_INGREDIENTS[ingredient]}
                </span>: {props.ingredients[ingredient]}
            </li>
        );

    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: £{props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button type="Danger" clicked={props.cancelPurchase}>CANCEL</Button>
            <Button type="Success" clicked={props.confirmPurchase}>CONFIRM</Button>
        </>
    )
}

export default orderSummary;