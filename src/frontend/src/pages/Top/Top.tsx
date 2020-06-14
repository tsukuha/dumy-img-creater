import * as React from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import * as styles from './scss/top.scss';

const Top = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
};

export { Top };
