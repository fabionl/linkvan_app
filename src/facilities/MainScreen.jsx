import React from 'react';

// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { ServiceIcon, ServiceTypes } from './Services';
import MainScreenItem from './MainScreenItem';

const ContainerStyle = {
    marginBottom: 10,
};

class MainScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <CssBaseline /> */}
                <Container maxWidth="sm" style={ContainerStyle}>
                    {ServiceTypes.map(service => (
                        <MainScreenItem
                            key={service.title}
                            title={service.title}
                            to={service.url}
                        >
                            <ServiceIcon type={service.title} />
                        </MainScreenItem>
                    ))}
                </Container>
            </React.Fragment>
        );
    }
}

export default MainScreen;
