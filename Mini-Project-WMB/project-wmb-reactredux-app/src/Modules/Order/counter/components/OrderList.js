import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { height } from '@material-ui/system';

const style={
    card:{
        width:'830px',
        height:'800px'
    }
}

class ListPesanan extends Component {
    render() {
        return (
            <div style={{float:'left'}}>
            <Grid>
                <Card style={style.card}>
                <h2>List Pesan</h2>
                </Card>
            </Grid>
            </div>
        );
    }
}

export default ListPesanan;