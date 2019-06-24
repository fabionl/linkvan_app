import React from 'react';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import HomeIcon from '@material-ui/icons/Home';

const rootStyle = {
    flexGrow: 1,
};

const buttonStyle = {
    float: 'left',
    margin: 0,
};

const iconStyle = {
    marginRight: 10,
    width: 20,
    height: 20,
};

class NavBar extends React.Component {
    render() {
        return (
            <List component="nav" style={rootStyle}>
                <ListItem component="div">
                    <ListItemText inset>
                        <Typography color="inherit" variant="h1">
                            <Button variant="outlined" href="/" style={buttonStyle}>
                                <HomeIcon style={iconStyle} />
                                Home
                            </Button>
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        );
    }
}

export default NavBar;
