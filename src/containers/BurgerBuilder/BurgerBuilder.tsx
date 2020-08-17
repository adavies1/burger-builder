import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

import axios from '../../axios/axios-orders';
import {
    BURGER_INGREDIENT_IDS,
    BURGER_INGREDIENT_PRICES,
    BURGER_BASE_PRICE,
    BURGER_INGREDIENT_COUNT
} from '../../constants';
import { transformObject } from '../../utils';
import withErrorHander from '../../hoc/withErrorHandler/withErrorHandler';

type BurgerBuilderProps = {

};

type BurgerBuilderState = {
    error: boolean,
    ingredients: BURGER_INGREDIENT_COUNT,
    loading: boolean,
    loadingIngredients: boolean,
    price: number,
    purchasable: boolean,
    purchasing: boolean
};

class BurgerBuilder extends Component<BurgerBuilderProps, BurgerBuilderState> {
    state:BurgerBuilderState = {
        error: false,
        ingredients: {} as BURGER_INGREDIENT_COUNT,
        loading: false,
        loadingIngredients: false,
        price: BURGER_BASE_PRICE,
        purchasable: false,
        purchasing: false
    }

    constructor(props: BurgerBuilderProps) {
        super(props);

        console.log('burger start');
    }

    componentDidMount() {
        this.setState({
            loadingIngredients: true
        });

        axios.get<BURGER_INGREDIENT_COUNT>('/ingredients.json')
            .then(resp => {
                this.setState({
                    ingredients: resp.data,
                    loadingIngredients: false
                })
            })
            .catch(err => {
                console.error('Failed to load ingredients list');
                this.setState({
                    error: true
                })
            })
    }

    render() {
        return (
            <>
                {this.state.error
                    ? <p style={{textAlign: 'center'}}>Sorry folks, we're having problems. No burgers today =(</p>
                    : <>
                        <Modal show={this.state.purchasing} close={this.purchaseCancelHandler}>
                            {this.state.loading || this.state.loadingIngredients
                                ? <Spinner />
                                : <OrderSummary
                                    ingredients={this.state.ingredients}
                                    price={this.state.price}
                                    cancelPurchase={this.purchaseCancelHandler}
                                    confirmPurchase={this.purchaseConfirmHandler}/>
                            }
                        </Modal>
                        {this.state.loadingIngredients
                            ? <Spinner/>
                            : <>
                                <Burger ingredients={this.state.ingredients}/>
                                <BuildControls
                                    price={this.state.price}
                                    purchasable={this.state.purchasable}
                                    disabledIngredients={transformObject(this.state.ingredients, i => i <= 0)}
                                    ingredientAdded={this.addIngredientHandler}
                                    ingredientRemoved={this.removeIngredientHandler}
                                    purchase={this.purchaseHandler} />
                            </>
                        }
                    </>
                }
            </>
        );
    }

    addIngredientHandler = (type:BURGER_INGREDIENT_IDS) => {
        const newIngredients:BURGER_INGREDIENT_COUNT = {
            ...this.state.ingredients,
            [type]: this.state.ingredients[type] + 1
        };

        this.setState({
            ingredients: newIngredients,
            price: this.calculatePrice(newIngredients),
            purchasable: this.calculatePurchasable(newIngredients)
        });
    }

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseConfirmHandler = () => {
        this.setState({
            loading: true
        }, () => {
            axios.post('/orders.json', {
                ingredients: this.state.ingredients,
                price: this.state.price,
                customer: {
                    name: 'Alex',
                    address: {
                        street: "Test street",
                        postcode: "TE1 1ST",
                        country: "UK"
                    },
                    email: "test@test.com",
                },
                deliveryMethod: "fastest"
            })
            .then(resp => console.log(resp))
            .catch(err => console.error(err))
            .finally(() => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            })
        });
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    removeIngredientHandler = (type:BURGER_INGREDIENT_IDS) => {
        const newIngredients:BURGER_INGREDIENT_COUNT = {
            ...this.state.ingredients,
            [type]: Math.max(0, this.state.ingredients[type] - 1)
        };

        this.setState({
            ingredients: newIngredients,
            price: this.calculatePrice(newIngredients),
            purchasable: this.calculatePurchasable(newIngredients)
        });
    }

    calculatePrice(ingredients: BURGER_INGREDIENT_COUNT = this.state.ingredients) {
        const ingredientPrice = (Object.keys(ingredients) as BURGER_INGREDIENT_IDS[])
            .map(ingredient => ingredients[ingredient] * BURGER_INGREDIENT_PRICES[ingredient])
            .reduce((prev, el) => prev + el, 0);

        return BURGER_BASE_PRICE + ingredientPrice;
    }

    calculatePurchasable(ingredients: BURGER_INGREDIENT_COUNT = this.state.ingredients) {
        return (Object.keys(ingredients) as BURGER_INGREDIENT_IDS[])
            .reduce((prev, curr) => prev + ingredients[curr], 0) > 0;
    }
};

export default withErrorHander(BurgerBuilder, axios);