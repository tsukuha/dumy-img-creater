import * as React from 'react';
import { useState, Dispatch, SetStateAction } from 'react';
import * as styles from './scss/header.scss';

const Header = (): JSX.Element => {
    const [update, updateState]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const stateValueUpdate = (): void => {
        if (update) {
            updateState(0);
        } else {
            updateState(1);
        }
    };
    return (
        <div className={styles.header}>
            <ul></ul>
        </div>
    );
};

export { Header };
