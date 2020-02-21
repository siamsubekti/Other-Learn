import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MakananReducer from './reducer/FoodReducer';
import { Switch, Route } from "react-router-dom";
import FoodList from './components/FoodList';

class FoodContainer extends Component {
    render() {
        return (
            
                <Grid>
                    <Switch>
                        <Route path="/listmakan" component={FoodList}/>
                    </Switch>
                </Grid>
        );
    }
}

export default FoodContainer;