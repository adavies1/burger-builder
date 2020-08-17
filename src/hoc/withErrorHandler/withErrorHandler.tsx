import React, { Component } from 'react';
import { AxiosInstance, AxiosError } from 'axios';
import Modal from '../../components/UI/Modal/Modal';

type WithErrorHandlerState = {
    error: AxiosError | undefined
}

type WithErrorHandlerProps = {

}

const withErrorHandler = (WrappedComponent: React.ComponentType, axios: AxiosInstance) => {
    return class WithErrorHandler extends Component<WithErrorHandlerProps, WithErrorHandlerState> {
        reqInterceptorId: number | undefined = undefined;
        respInterceptorId: number | undefined = undefined;

        state:WithErrorHandlerState = {
            error: undefined
        }

        constructor(props: WithErrorHandlerProps) {
            super(props);

            this.reqInterceptorId = axios.interceptors.request.use(req => {
                this.setState({ error: undefined });
                return req;
            });
            this.respInterceptorId = axios.interceptors.response.use(undefined, error => {
                this.setState({ error: error });
                return Promise.reject(error);
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptorId as number);
            axios.interceptors.response.eject(this.respInterceptorId as number);
        }

        closeModalHandler = () => {
            this.setState({
                error: undefined
            });
        }

        render() {
            return (
                <>
                    <Modal show={!!this.state.error} close={this.closeModalHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </>
            )
        };
    }
}

export default withErrorHandler;