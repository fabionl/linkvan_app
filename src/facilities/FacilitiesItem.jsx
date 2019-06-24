import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
// import Icon from '@material-ui/core/Icon';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Container, Typography } from '@material-ui/core';

import { ServiceIcon, ServiceTypes } from './Services';

const FacItemStyle = {
    // maxWidth: 300,
    margin: 5,
};

class FacilitiesItem extends React.Component {
    render() {
        var facility = this.props.facility;
        var services = facility.services.trim().split(' ');
        return (
            <Card style={FacItemStyle}>
                <CardHeader
                    avatar={
                        <Avatar aria-label={facility.name}>{facility.name[0]}</Avatar>
                    }
                    title={facility.name}
                    subheader="OPEN"
                />

                <CardContent>
                    <Typography variant="h5">{facility.name}</Typography>
                    <Typography variant="body1">Phone: {facility.phone}</Typography>
                    <Typography>
                        Services:
                        {services.map(serv => (
                            <ServiceIcon key={serv} type={serv} />
                        ))}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

// FacilitiesItem.propTypes = {
//     title: PropTypes.string.isRequired,
//     facility: PropTypes.object.isRequired,
//     OnClick: PropTypes.func,
// };

export default FacilitiesItem;
