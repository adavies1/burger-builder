import React, { FunctionComponent } from 'react';
import css from './NavigationItem.module.scss';

export type NavigationItemProps = {
    href: string,
    active?: boolean
}

const navigationItem:FunctionComponent<NavigationItemProps> = props => (
    <li className={css.NavigationItem}>
        <a className={`${css.link} ${props.active ? css.active : ''}`} href={props.href}>
            {props.children}
        </a>
    </li>
)

export default navigationItem;