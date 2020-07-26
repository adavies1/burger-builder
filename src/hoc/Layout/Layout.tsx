import React, { Component } from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import css from './Layout.module.scss';

type LayoutProps = {

};

type LayoutState = {
    showSideDrawer: boolean
};

class Layout extends Component<LayoutProps, LayoutState> {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHander = () => {
        this.setState({
            showSideDrawer: false
        })
    }

    sideDrawerToggleHander = () => {
        this.setState(prevState => ({
            showSideDrawer: !prevState.showSideDrawer
        }));
    }

    render() {
        return (
            <>
                <div>SideDrawer, Backdrop</div>
                <Toolbar toggleSideDrawer={this.sideDrawerToggleHander}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerCloseHander} />
                <main className={css.Main}>
                    {this.props.children}
                </main>
            </>
        );
    }
};

export default Layout;