import React from 'react';

import CrisisIcon from '@material-ui/icons/Warning';
import ShelterIcon from '@material-ui/icons/Store';
import FoodIcon from '@material-ui/icons/Restaurant';
import MedicalIcon from '@material-ui/icons/LocalHospital';
import HygieneIcon from '@material-ui/icons/HotTub';
import TechIcon from '@material-ui/icons/Laptop';
import LearningIcon from '@material-ui/icons/LocalLibrary';
import LegalIcon from '@material-ui/icons/SupervisorAccount';
import NoticesIcon from '@material-ui/icons/SurroundSound';

const ServiceTypes = [
    { title: 'Shelter', url: '/facilities/Shelter' },
    { title: 'Food', url: '/facilities/Food' },
    { title: 'Medical', url: '/facilities/Medical' },
    { title: 'Hygiene', url: '/facilities/Hygiene' },
    { title: 'Technology', url: '/facilities/Technology' },
    { title: 'Legal', url: '/facilities/Legal' },
    { title: 'Learning', url: '/facilities/Learning' },
    { title: 'CrisisLines', url: '/CrisisLines' },
    { title: 'Notices', url: '/Notices' },
];

class ServiceIcon extends React.Component {
    render() {
        switch (this.props.type.toLowerCase()) {
            case 'shelter': {
                return <ShelterIcon />;
                // break;
            }
            case 'food': {
                return <FoodIcon />;
            }
            case 'medical': {
                return <MedicalIcon />;
            }
            case 'hygiene': {
                return <HygieneIcon />;
            }
            case 'technology': {
                return <TechIcon />;
            }
            case 'legal': {
                return <LegalIcon />;
            }
            case 'learning': {
                return <LearningIcon />;
            }
            case 'crisislines': {
                return <CrisisIcon />;
            }
            case 'notices': {
                return <NoticesIcon />;
            }
            default: {
                //statements
                return false;
                // break;
            }
        }
    }
}

export { ServiceIcon, ServiceTypes };
