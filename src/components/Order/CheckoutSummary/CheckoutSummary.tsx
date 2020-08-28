import React, { FunctionComponent } from 'react';
import css from './CheckoutSummary.module.scss';
import { BURGER_INGREDIENT_COUNT } from '../../../constants';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button'

type CheckoutSummaryProps = {
    ingredients: BURGER_INGREDIENT_COUNT,
    checkoutCancelled: () => void,
    checkoutContinued: () => void
}

const checkoutSummary:FunctionComponent<CheckoutSummaryProps> = props => (
    <div className={css.CheckoutSummary}>
        <h1>We hope it tastes good!</h1>
        <div className={css.burgerContainer}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button type="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
        <Button type="Success" clicked={props.checkoutContinued}>Continue</Button>
    </div>
);

export default checkoutSummary;