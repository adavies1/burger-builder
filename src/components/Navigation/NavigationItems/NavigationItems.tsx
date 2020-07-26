import React, { FunctionComponent } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import css from './NavigationItems.module.scss';

type NavigationItemsProps = {

};

const navigationItems:FunctionComponent<NavigationItemsProps> = () => (
    <ul className={css.NavigationItems}>
        <NavigationItem href={'/'} active>Burger Builder</NavigationItem>
        <NavigationItem href={'/'}>Checkout</NavigationItem>
    </ul>
)

export default navigationItems;