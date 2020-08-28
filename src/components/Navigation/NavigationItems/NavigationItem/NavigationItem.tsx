import React, { FunctionComponent } from 'react';
import css from './NavigationItem.module.scss';
import { NavLink } from 'react-router-dom';

export type NavigationItemProps = {
    href: string,
    active?: boolean
}

const navigationItem:FunctionComponent<NavigationItemProps> = props => (
    <li className={css.NavigationItem}>
        <NavLink exact className={`${css.link}`} to={props.href} activeClassName={css.active}>
            {props.children}
        </NavLink>
    </li>
)

export default navigationItem;