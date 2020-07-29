import React, { FunctionComponent } from 'react';
import css from './Spinner.module.scss';

type SpinnerProps = {

}

const spinner:FunctionComponent<SpinnerProps> = () => (
    <div className={css.Loader}>Loading...</div>
);

export default spinner;