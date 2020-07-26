import React, { FunctionComponent, memo } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import css from './Modal.module.scss';

type ModalProps = {
    children: React.ReactNode,
    show: boolean,
    close: () => void
}

const modal:FunctionComponent<ModalProps> = props => (
    <>
        <Backdrop show={props.show} close={props.close}/>
        <div className={`${css.Modal} ${props.show ? css.Show : ''}`}>
            {props.children}
        </div>
    </>
);

export default memo(modal, (prevProps, nextProps) => prevProps.show === nextProps.show);