import React, { FunctionComponent } from 'react';
import css from './Logo.module.scss';
import logoImage from '../../assets/logo.png';

type LogoProps = {

};

const logo: FunctionComponent<LogoProps> = props => (
    <div className={css.Logo}>
        <img className={css.Image} src={logoImage} alt=""/>
    </div>
);

export default logo;