import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ListMeja from './components/TableList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import MejaReducer from "./reducer/TableReducer";
import TableList from './components/TableList';

class TableContainer extends Component {
    render() {
        return (
            <Grid>
                <Switch>
                    <Route path="/bookmeja" component={TableList} />
                </Switch>
            </Grid>
        );
    }
}

export default TableContainer;