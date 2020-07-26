import React, { FunctionComponent } from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import css from './SideDrawer.module.scss';

type SideDrawerProps = {
    close?: () => void,
    open: boolean
}

const sideDrawer:FunctionComponent<SideDrawerProps> = props => {
    return (
        <>
            <Backdrop show={props.open} close={props.close}/>
            <div className={`${css.SideDrawer} ${props.open ? css.Open : css.Close}`}>
                <div className={css.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    )
};

export default sideDrawer;