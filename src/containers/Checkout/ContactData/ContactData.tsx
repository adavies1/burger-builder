import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../../components/UI/Button/Button';
import css from './ContactData.module.scss'
import { BURGER_INGREDIENT_COUNT } from '../../../constants';
import axios from '../../../axios/axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';


type ContactDataRouterParams = {

};

interface ContactDataProps extends RouteComponentProps<ContactDataRouterParams> {
    ingredients: BURGER_INGREDIENT_COUNT,
    price: number
}

type ContactDataState = {
    name: string,
    email: string,
    address: {
        street: string,
        postalCode: string
    },
    loading: boolean
}

class ContactData extends Component<ContactDataProps, ContactDataState> {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = () => {
        this.setState({
            loading: true
        }, () => {
            axios.post('/orders.json', {
                ingredients: this.props.ingredients,
                price: this.props.price,
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
            .then(() => {
                this.props.history.push({
                    pathname: '/'
                })
            })
            .catch(err => console.error(err))
            .finally(() => {
                this.setState({
                    loading: false
                });
            })
        });
    }

    render() {
        return (
            <>
                {this.state.loading
                    ? <Spinner/>
                    : <div className={css.ContactData}>
                        <h4>Enter your contact data</h4>
                        <form className={css.Form}>
                            <input className={css.Input} type="text" name="name" placeholder="Your name"/>
                            <input className={css.Input} type="email" name="email" placeholder="Your email"/>
                            <input className={css.Input} type="text" name="street" placeholder="Street"/>
                            <input className={css.Input} type="text" name="postcode" placeholder="Postcode"/>
                            <Button type="Success" clicked={this.orderHandler}>ORDER</Button>
                        </form>
                    </div>
                }
            </>
        )
    }
}

export default ContactData;