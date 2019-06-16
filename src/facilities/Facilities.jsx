import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';

import ReactSVG from 'react-svg';
import ShelterIcon from '../icons/shelter.svg';
import FoodIcon from '../icons/cutlery.svg';
import MedicalIcon from '../icons/medical.svg';
import HygieneIcon from '../icons/hygiene.svg';
import TechnologyIcon from '../icons/technology.svg';
import LegalIcon from '../icons/advocacy.svg';
import LearningIcon from '../icons/learning.svg';
import CrisisIcon from '../icons/crisis.svg';

const FacilitiesStyle = styled.div`
    margin-top: 1em;
    width: 50em;
    border: 1px solid #000;

    h1 {
        font-size: 1.7em;
    }
    a {
        margin-bottom: 0.5em;
        font-size: 1.4em;
    }

    .linkvan-icon: {
        height: 30px;
        width: 30px;
    }

    .facilities-category{
        display: block;
        margin-bottom: 12px;
        padding: 8px 12px;
        width:100%;
        text-align: left;
    }
`;

class Facilities extends React.Component {
    render() {
        return (
            <FacilitiesStyle>
                <h1 className='text-left'>What service are you looking for?</h1>
                <Container>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={ShelterIcon} /> </i>
                    <span>Shelter</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={FoodIcon} /> </i>
                    <span>Food</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={MedicalIcon} /> </i>
                    <span>Medical</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={HygieneIcon} /> </i>
                    <span>Hygiene</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={TechnologyIcon} /> </i>
                    <span>Technology</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={LegalIcon} /> </i>
                    <span>Legal</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={LearningIcon} /> </i>
                    <span>Learning</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                <a className='btn btn-light facilities-category' href='/' >
                    <i className='linkvan-icon'><ReactSVG src={CrisisIcon} /> </i>
                    <span>Crisis Lines</span>
                    <i class="glyphicon glyphicon-chevron-right chevron-right" />
                </a>
                </Container>
            </FacilitiesStyle>
        );
    }
}

export default Facilities;

