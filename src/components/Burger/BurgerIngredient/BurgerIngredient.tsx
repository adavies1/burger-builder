import React, { FunctionComponent } from 'react';
import { BURGER_PART_IDS } from '../../../constants';
import css from './BurgerIngredient.module.scss'

type BurgerIngredientProps = {
    type: BURGER_PART_IDS
};

type IngredientCssMap = {
    [I in BURGER_PART_IDS]: string
};

const ingredientCssMap:IngredientCssMap = {
    'bread-bottom': css.BreadBottom,
    'bread-top': css.BreadTop,
    'meat':  css.Meat,
    'cheese': css.Cheese,
    'salad': css.Salad,
    'bacon': css.Bacon
}

const burgerIngredient: FunctionComponent<BurgerIngredientProps> = props => {
    return (
        <div className={ingredientCssMap[props.type]}>
            {props.type === 'bread-top' ?
                <>
                    <div className={css.Seeds1}></div>
                    <div className={css.Seeds2}></div>
                </> : null
            }
        </div>
    );
}

export default burgerIngredient;