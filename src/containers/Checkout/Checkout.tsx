import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { BURGER_INGREDIENT_COUNT } from '../../constants';
import { RouteComponentProps } from 'react-router-dom'
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

type CheckoutRouterParams = {
    meat: string,
    cheese: string,
    salad: string,
    bacon: string,
    price: string
}

interface CheckoutProps extends RouteComponentProps<CheckoutRouterParams> {

};

type CheckoutState = {
    ingredients: BURGER_INGREDIENT_COUNT,
    price: number
}

class Checkout extends Component<CheckoutProps, CheckoutState> {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        } as BURGER_INGREDIENT_COUNT,
        price: 0
    }

    componentDidMount() {
        const ingredients: {[ingredient: string]: number } = {};
        const other = {price: 0};

        Array.from((new URLSearchParams(this.props.location.search)).entries())
            .forEach(entry => {
                if(Object.keys(this.state.ingredients).indexOf(entry[0]) !== -1) {
                    ingredients[entry[0]] = parseInt(entry[1]);
                } else {
                    if(entry[0] === 'price') {
                        other.price = parseInt(entry[1]);
                    }
                }
            });

        this.setState({
            ingredients: ingredients as BURGER_INGREDIENT_COUNT,
            ...other
        })
    }

    checkoutCancelled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelled}
                    checkoutContinued={this.checkoutContinued}/>

                <Route path={this.props.match.path + '/contact-data'} render={routeProps => (
                    <ContactData {...routeProps} ingredients={this.state.ingredients} price={this.state.price}/>
                )}/>
            </div>
        )
    }
}

export default Checkout;