import React from 'react';
import Home from './Home';
import NotFound from './NotFound';

import {
	Route,
	Switch,
	BrowserRouter as Router,
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
