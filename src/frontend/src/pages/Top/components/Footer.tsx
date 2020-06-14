import * as React from 'react';
import { useState, Dispatch, SetStateAction } from 'react';
import * as styles from './scss/footer.scss';

const Footer = (): JSX.Element => {
    const [update, updateState]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const stateValueUpdate = (): void => {
        if (update) {
            updateState(0);
        } else {
            updateState(1);
        }
    };
    return (
        <div className={styles.footer}>
            <ul></ul>
        </div>
    );
};

export { Footer };
