import React from 'react';
import PropTypes from 'prop-types';

// import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// import Icon from '@material-ui/core/Icon';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
} from '@material-ui/core';

// import styled from 'styled-components';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';

// import ReactSVG from 'react-svg';
// import ShelterIcon from '../icons/shelter.svg';
// import FoodIcon from '../icons/cutlery.svg';
// import MedicalIcon from '../icons/medical.svg';
// import HygieneIcon from '../icons/hygiene.svg';
// import TechnologyIcon from '../icons/technology.svg';
// import LegalIcon from '../icons/advocacy.svg';
// import LearningIcon from '../icons/learning.svg';
// import CrisisIcon from '../icons/crisis.svg';

// const MainScreenStyle = styled.div`
//     margin-top: 1em;
//     width: 50em;
//     border: 1px solid #000;

//     h1 {
//         font-size: 1.7em;
//     }
//     a {
//         margin-bottom: 0.5em;
//         font-size: 1.4em;
//     }

//     .linkvan-icon: {
//         height: 30px;
//         width: 30px;
//     }

//     .facilities-category {
//         display: block;
//         margin-bottom: 12px;
//         padding: 8px 12px;
//         width: 100%;
//         text-align: left;
//     }
// `;

class MainScreenItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: 0 };
    }
    handleClick() {
        if (this.props.onClick) {
            this.props.onClick();
        } else {
            this.setState({ clicked: this.state.clicked + 1 });
        }
    }
    render() {
        return (
            <React.Fragment>
                {/* <CssBaseline /> */}
                <Paper onClick={() => this.handleClick()}>
                    <List>
                        <ListItem button={true}>
                            <ListItemAvatar>
                                <Avatar>{this.props.children}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={this.props.title} />
                            <ListItemSecondaryAction>></ListItemSecondaryAction>
                        </ListItem>
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

MainScreenItem.propTypes = {
    title: PropTypes.string.isRequired,
    OnClick: PropTypes.func,
};

export default MainScreenItem;
