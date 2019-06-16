import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
// import logo from './logo.svg';
// import './App.css';
import Header from './header/Header';
// import Facilities from './facilities/Facilities.jsx';
import Button from '@material-ui/core/Button';
import MainScreen from './facilities/MainScreen';

class App extends React.Component {
    render() {
        return (
            // <div className="App">
            // </div>
            <React.Fragment>
                <CssBaseline />
                <Header />
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
                <MainScreen />
            </React.Fragment>
        );
    }
}

export default App;
