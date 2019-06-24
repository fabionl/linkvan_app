import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
// import logo from './logo.svg';
// import './App.css';
// import Facilities from './facilities/Facilities.jsx';
import Button from '@material-ui/core/Button';

import Routes from './routes/Routes';
import Header from './header/Header';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Header />
                <Routes />
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </React.Fragment>
        );
    }
}

export default App;
