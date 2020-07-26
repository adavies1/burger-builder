import React, { FunctionComponent } from 'react';
import BuildControl from './BuildControl/BuildControl';
import { BURGER_INGREDIENTS, BURGER_INGREDIENT_IDS, BURGER_INGREDIENT_FLAG } from '../../../constants';
import css from './BuildControls.module.scss';

type BuildControlsProps = {
    disabledIngredients: BURGER_INGREDIENT_FLAG,
    ingredientAdded: (ingredient: BURGER_INGREDIENT_IDS) => void,
    ingredientRemoved: (ingredient: BURGER_INGREDIENT_IDS) => void,
    purchase: () => void,
    price: number,
    purchasable: boolean
}

const buildControls:FunctionComponent<BuildControlsProps> = props => (
    <div className={css.BuildControls}>
        <p>Burger price: <b>£{props.price.toFixed(2)}</b></p>
        {
            (Object.keys(BURGER_INGREDIENTS) as BURGER_INGREDIENT_IDS[])
            .map((ingredient, index) => {
                return <BuildControl
                    key={`${ingredient}-${index}`}
                    added={() => props.ingredientAdded(ingredient)}
                    removed={() => props.ingredientRemoved(ingredient)}
                    label={BURGER_INGREDIENTS[ingredient]}
                    disabled={props.disabledIngredients[ingredient]}/>
            })
        }
        <button className={css.OrderButton} disabled={!props.purchasable} onClick={props.purchase}>
            ORDER NOW
        </button>
    </div>
);

export default buildControls;