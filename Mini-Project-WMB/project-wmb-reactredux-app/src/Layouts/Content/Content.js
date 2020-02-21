import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TableContainer from '../../Modules/Tables/counter/TableContainer';
import TransactionContainer from '../../Modules/Transactions/counter/TransactionContainer';
import OrderContainer from '../../Modules/Order/counter/OrderContainer'
import CombineReducer from '../../Modules/CombineReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import DrinkContainer from '../../Modules/Drinks/counter/DrinkContainer';
import FoodContainer from '../../Modules/Food/counter/FoodContainer';

class Content extends Component {
    render() {
        return (
            <Grid>
                <Provider store={createStore(CombineReducer)}>
                <Switch>
                    <Route path="/home"></Route>
                    <Route path="/pesanmakan"><OrderContainer/></Route>
                    <Route path="/listmakan"><FoodContainer /></Route>
                    <Route path="/listminum"><DrinkContainer /></Route>
                    <Route path="/bookmeja"><TableContainer /></Route>
                    <Route path="/listtransaksi"><TransactionContainer/></Route>
                    <Route path="/pesanan"><OrderContainer/></Route>
                </Switch>
                </Provider>
            </Grid>
        );
    }
}

export default Content;