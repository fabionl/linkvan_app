import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import NotFound from '../NotFound';
import MainScreen from '../facilities/MainScreen';
import Facilities from '../facilities/Facilities';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Container>
                    <Switch>
                        <Route exact path="/" component={MainScreen} />
                        <Route path="/facilities/:search" component={Facilities} />
                        <Route component={NotFound} />
                    </Switch>
                </Container>
            </Router>
        );
    }
}

export default Routes;
