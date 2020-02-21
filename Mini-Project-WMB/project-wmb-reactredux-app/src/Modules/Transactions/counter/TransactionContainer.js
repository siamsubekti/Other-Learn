import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ListTransactions from './components/ListTransactions';
import TransactionReducer from './reducer/TransactionReducer';
import { Switch, Route } from "react-router-dom";


class TransactionContainer extends Component {
    render() {
        return (
            <Provider store={createStore(TransactionReducer)}>
                <Grid>
                    <Switch>
                        <Route path="/listtransaksi" component={ListTransactions} />
                    </Switch>
                </Grid>
            </Provider>
        );
    }
}

export default TransactionContainer;