import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { ORDER } from '../../constants';
import Order from '../../components/Order/Order';
import axios from '../../axios/axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner'

type OrdersRouterParams = {

}

interface OrdersParams extends RouteChildrenProps<OrdersRouterParams> {

}

type OrdersState = {
    orders: Record<string, ORDER>,
    loading: boolean
}

class Orders extends Component<OrdersParams, OrdersState> {
    state = {
        orders: {} as Record<string, ORDER>,
        loading: false
    }

    componentDidMount() {
        this.setState({loading: true}, () => {
            axios.get<Record<string, ORDER>>('/orders.json')
                .then(res => {
                    this.setState({ orders: res.data, loading: false })
                })
                .catch(() => {
                    this.setState({loading: false})
                })
        })
    }

    render() {
        return (
            <>
                <h1>Orders:</h1>
                {this.state.loading
                    ? <Spinner/>
                    : Object.keys(this.state.orders).map(key => <Order key={key} order={this.state.orders[key]}/>)
                }
            </>
        );
    }


}

export default withErrorHandler(Orders, axios);