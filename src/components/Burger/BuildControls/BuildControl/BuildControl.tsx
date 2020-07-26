import React, { FunctionComponent } from 'react';
import css from './BuildControl.module.scss';

type BuildControlProps = {
    label: string,
    disabled: boolean,
    added: () => void,
    removed: () => void
}

const buildControl:FunctionComponent<BuildControlProps> = props => (
    <div className={css.BuildControl}>
        <div className={css.Label}>{props.label}</div>
        <button
            className={`${css.Button} ${css.Less}`}
            onClick={props.removed}
            disabled={props.disabled}>
            Less
        </button>
        <button
            className={`${css.Button} ${css.More}`}
            onClick={props.added}>
            More
        </button>
    </div>
);

export default buildControl;