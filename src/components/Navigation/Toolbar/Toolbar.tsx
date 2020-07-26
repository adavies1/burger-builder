import React, { FunctionComponent } from 'react';

import HamburgerIcon from '../SideDrawer/HamburgerIcon/HamburgerIcon';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import css from './Toolbar.module.scss'

type ToolbarProps = {
    toggleSideDrawer: () => void
};

const toolbar:FunctionComponent<ToolbarProps> = props => (
    <header className={css.Toolbar}>
        <HamburgerIcon clicked={props.toggleSideDrawer} />
        <div className={css.Logo}>
            <Logo/>
        </div>
        <nav className={`${css.Nav} ${css.DesktopOnly}`}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;