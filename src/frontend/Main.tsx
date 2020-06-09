import * as React from 'react';
import { render } from 'react-dom';
import { Top } from './pages/Top/Top';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Top} />
            </Switch>
        </BrowserRouter>
    );
};

render(<Main />, document.getElementById('root'));
