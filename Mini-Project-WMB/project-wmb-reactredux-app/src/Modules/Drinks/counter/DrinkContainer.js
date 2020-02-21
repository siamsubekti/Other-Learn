import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { createStore } from "redux";
import { Provider } from "react-redux";
import MinumanReducer from "./reducer/DrinkReducer";
import { Switch, Route } from "react-router-dom";
import DrinksList from './components/DrinksList';

class DrinkContainer extends Component {
    render() {
        return (
                <Grid>
                    <Switch>
                        <Route path="/listminum" component={DrinksList} />
                    </Switch>
                </Grid>
        );
    }
}

export default DrinkContainer;