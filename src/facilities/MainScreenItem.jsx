import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';

import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    Typography,
} from '@material-ui/core';

const PaperStyle = {
    marginBottom: 5,
};
const titleStyle = {
    flexGrow: 1,
};

class MainScreenItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: 0 };
    }
    // handleClick() {
    //     if (this.props.onClick) {
    //         this.props.onClick();
    //     } else {
    //         this.setState({ clicked: this.state.clicked + 1 });
    //     }
    // }
    render() {
        return (
            <React.Fragment>
                {/* <Paper style={PaperStyle} onClick={() => this.handleClick()}> */}
                <Paper style={PaperStyle}>
                    <List>
                        <ListItem button component="a" href={this.props.to}>
                            <ListItemAvatar>
                                <Avatar>{this.props.children}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={this.props.title} style={titleStyle} />
                            <Typography>></Typography>
                            {/* <ListItemSecondaryAction>></ListItemSecondaryAction> */}
                        </ListItem>
                    </List>
                </Paper>
            </React.Fragment>
        );
    }
}

MainScreenItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
    // OnClick: PropTypes.func,
};

export default MainScreenItem;
