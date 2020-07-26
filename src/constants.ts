export type BURGER_PART_IDS = 'bread-bottom' | 'bread-top' | 'meat' | 'cheese' | 'salad' | 'bacon';
export type BURGER_INGREDIENT_IDS = 'meat' | 'cheese' | 'salad' | 'bacon';
export type BURGER_INGREDIENT_LABEL = Record<BURGER_INGREDIENT_IDS, string>;
export type BURGER_INGREDIENT_COUNT = Record<BURGER_INGREDIENT_IDS, number>;
export type BURGER_INGREDIENT_FLAG = Record<BURGER_INGREDIENT_IDS, boolean>;

export const BURGER_INGREDIENTS:BURGER_INGREDIENT_LABEL = {
    meat: 'Meat',
    cheese: 'Cheese',
    salad: 'Salad',
    bacon: 'Bacon'
};

export const BURGER_INGREDIENT_PRICES:BURGER_INGREDIENT_COUNT = {
    salad: 0.4,
    bacon: 0.65,
    cheese: 0.5,
    meat: 0.95
};

export const BURGER_BASE_PRICE = 4;