import React, { FunctionComponent } from 'react';
import css from './Backdrop.module.scss';

type BackdropProps = {
    show: boolean,
    close?: () => void
}

const backdrop:FunctionComponent<BackdropProps> = props => (
    props.show ? <div className={css.Backdrop} onClick={props.close}></div> : null
);

export default backdrop;