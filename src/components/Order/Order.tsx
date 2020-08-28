import React, { FunctionComponent }  from 'react';
import css from './Order.module.scss';
import { ORDER, BURGER_INGREDIENTS } from '../../constants';
import Burger from '../Burger/Burger';

type OrderProps = {
    order: ORDER
}

const order:FunctionComponent<OrderProps> = props => (
    <div className={css.Order}>

        <div className={css.Burger}>
            <div>
                <strong>Customer:</strong>
                <ul>
                    <li>{props.order.customer.name}</li>
                    <li>{props.order.customer.email}</li>
                    <li>
                        <address>
                            {props.order.customer.address.street},
                            {props.order.customer.address.postcode},
                            {props.order.customer.address.country},
                        </address>
                    </li>
                </ul>
                <br></br>

                <strong>Burger ingredients:</strong>
                <ul>
                    <li>{BURGER_INGREDIENTS.meat}: {props.order.ingredients.meat}</li>
                    <li>{BURGER_INGREDIENTS.cheese}: {props.order.ingredients.cheese}</li>
                    <li>{BURGER_INGREDIENTS.bacon}: {props.order.ingredients.bacon}</li>
                    <li>{BURGER_INGREDIENTS.salad}: {props.order.ingredients.salad}</li>
                </ul>
                <br></br>

                <strong>Price:</strong>
                £{props.order.price}
            </div>
            <div>
                <Burger orderMode ingredients={props.order.ingredients}/>
            </div>
        </div>

    </div>
)

export default order;