import React, { FunctionComponent } from 'react';
import css from './HamburgerIcon.module.scss';

type HamburgerIconProps = {
    clicked?: React.MouseEventHandler<HTMLButtonElement>
}

const hamburgerIcon:FunctionComponent<HamburgerIconProps> = props => (
    <button className={css.HamburgerIcon} onClick={props.clicked} aria-label="Menu">
        <div className={css.Bar}></div>
        <div className={css.Bar}></div>
        <div className={css.Bar}></div>
    </button>
)



export default hamburgerIcon;