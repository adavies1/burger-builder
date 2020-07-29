import React, { useState, FunctionComponent, useEffect } from 'react';
import { AxiosInstance, AxiosError } from 'axios';
import Modal from '../../components/UI/Modal/Modal';

type withErrorHanderState = {
    error: AxiosError | undefined
}

let reqInterceptor: number;
let respInterceptor: number;

const withErrorHander = <P extends object>(WrappedComponent: React.ComponentType<P>, axios: AxiosInstance): FunctionComponent<P> => {
    return (props) => {
        const [state, updateState] = useState<withErrorHanderState>({
            error: undefined
        });

        // Mount
        useEffect(() => {
            reqInterceptor = axios.interceptors.request.use(req => {
                updateState({ error: undefined });
                return req;
            });
            respInterceptor = axios.interceptors.response.use(undefined, resp => {
                updateState({ error: resp });
                return resp;
            });
        }, []);

        // Unmount
        useEffect(() => () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(respInterceptor);
        }, []);

        const closeModalHandler = () => {
            updateState({
                error: undefined
            });
        }

        return (
            <>
                <Modal show={!!state.error} close={closeModalHandler}>
                    {state.error ? state.error.message : null}
                </Modal>
                <WrappedComponent {...props}/>
            </>
        );
    }
}

export default withErrorHander;