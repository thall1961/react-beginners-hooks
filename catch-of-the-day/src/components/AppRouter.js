import React from 'react';
import {Router} from '@reach/router';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const AppRouter = () => {
    return (
        <Router>
            <StorePicker path="/" />
            <App path="/store/:storeId" />
            <NotFound default />
        </Router>
    );
};

export default AppRouter;
