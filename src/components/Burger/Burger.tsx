import React, { FunctionComponent } from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BURGER_INGREDIENT_IDS, BURGER_INGREDIENT_COUNT } from '../../constants';
import css from './Burger.module.scss';

type BurgerProps = {
    ingredients: BURGER_INGREDIENT_COUNT
    orderMode?: boolean
}

const burger:FunctionComponent<BurgerProps> = props => {
    let burgerIngredients = (Object.keys(props.ingredients) as Array<BURGER_INGREDIENT_IDS>)
        .map(ingredient => [...Array(props.ingredients[ingredient])]
            .map((_, idx) => <BurgerIngredient key={ingredient + idx} type={ingredient} />
        ))
        .reduce((prev, el) => prev.concat(el), [] as Array<JSX.Element>);


    return (
        <div className={`${css.Burger} ${props.orderMode ? css.OrderMode : ''}`}>
            <BurgerIngredient type="bread-top" />
            {burgerIngredients.length > 0
                ? burgerIngredients
                : <p>Please start adding ingredients!</p>
            }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;