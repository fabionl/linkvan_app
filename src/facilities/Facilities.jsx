import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import FacilitiesItem from './FacilitiesItem';
import data from '../data/facilities.json';
import { Grid } from '@material-ui/core';

// import styled from 'styled-components';

// const FacilitiesStyle = styled.div`
//     h1 {
//         font-size: 1.7em;
//     }
// `;

// const data = {};

class Facilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data };
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Typography color="inherit" variant="h1">
                        Facilities
                    </Typography>
                </Container>
                <Grid container spacing={3}>
                    {this.state.data.nearno.map(fac => (
                        // <Grid item sm={12} md={6} lg={4}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <FacilitiesItem key={fac.id} facility={fac} />
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        );
    }
}

export default Facilities;
