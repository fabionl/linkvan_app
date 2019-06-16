import React from 'react';

// import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import CrisisIcon from '@material-ui/icons/Warning';
import ShelterIcon from '@material-ui/icons/Store';
import FoodIcon from '@material-ui/icons/Restaurant';
import MedicalIcon from '@material-ui/icons/LocalHospital';
import HygieneIcon from '@material-ui/icons/HotTub';
import TechIcon from '@material-ui/icons/Laptop';
import LearningIcon from '@material-ui/icons/LocalLibrary';
import LegalIcon from '@material-ui/icons/SupervisorAccount';
import NoticesIcon from '@material-ui/icons/SurroundSound';

import MainScreenItem from './MainScreenItem';

class MainScreen extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <CssBaseline /> */}
                <Container maxWidth="sm">
                    <MainScreenItem
                        title="Shelter"
                        onClick={() => this.setState({ test: 1 })}
                    >
                        <ShelterIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Food">
                        <FoodIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Medical">
                        <MedicalIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Hygiene">
                        <HygieneIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Technology">
                        <TechIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Legal">
                        <LegalIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Learning">
                        <LearningIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Crisis Lines">
                        <CrisisIcon />
                    </MainScreenItem>
                    <MainScreenItem title="Notices">
                        <NoticesIcon />
                    </MainScreenItem>
                </Container>
            </React.Fragment>
        );
    }
}

export default MainScreen;
