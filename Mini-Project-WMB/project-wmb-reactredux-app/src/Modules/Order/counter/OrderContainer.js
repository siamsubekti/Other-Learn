import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Provider } from 'react-redux';
import PesananReducer from './reducer/OrderReducer';
import { createStore } from 'redux';
import ListPesanan from './components/OrderList';
import FormPesanan from './components/OrderForm';

class PesananContainer extends Component {
    render() {
        return (
            <div>
                <ListPesanan/>
                <div style={{marginLeft:'850px',marginTop:'80px'}}>
                <FormPesanan/>
                </div>
            </div>
        );
    }
}

export default PesananContainer;