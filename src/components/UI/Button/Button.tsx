import React, { FunctionComponent } from 'react';
import css from './Button.module.scss'

type ButtonProps = {
    clicked: () => void,
    type: 'Success' | 'Danger'
};

const Button:FunctionComponent<ButtonProps> = props => (
    <button type="button" className={[css.Button, css[props.type]].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>
);

export default Button;