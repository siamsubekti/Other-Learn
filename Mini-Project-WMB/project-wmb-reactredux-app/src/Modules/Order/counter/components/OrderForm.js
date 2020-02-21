import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import * as OrderService from '../service/OrderService';

class OrderForm extends React.Component{
    constructor(props) {
        super(props);

        this.submitOrder = this.submitOrder.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitOrder(data) {
        const { formType, dispatch } = this.props;
        console.log('order to submit:', data, ', formType:' , formType);
    
        dispatch({type: 'SUBMIT_ORDER', loading: true });
        OrderService.save(data)
          .then((order) => {
            console.log('user after submit:', order);
            dispatch({type: 'FETCH_A_ORDER_DONE', loading: false, order, formType });
            // history.push('/order');
          })
          .catch((error) => {
            dispatch({type: 'FETCH_A_ORDER_DONE', loading: false, order: data, formType });
          });
      }

    handleChange=(event)=> {
        let name = event.target.name;
        let value = event.target.value;
        this.props.dispatch({type: 'STORE_FORM_DATA', orders : {...this.props.orders, [name]: value}})
    }

// function handleChange(e)=> {
    
// }

    render(){
        return(
            <div>
                <Card style={{float:'right',width:'300px'}}>
                <h2>Form Order</h2>
                <form>
                    <TextField  id="nama" label="customerName" margin="normal">
                    </TextField><br/>
                    <TextField  id="table" label="table" margin="normal">
                    </TextField><br/>
                    <TextField  id="amount-customer" label="amount of customer" margin="normal">
                    </TextField><br/>
                    <TextField  id="cashier" label="cashier" margin="normal">
                    </TextField><br/>
                    <TextField  id="menu" label="menu" margin="normal">
                    </TextField><br/>
                    <TextField  id="quantity" label="quantity" margin="normal">
                    </TextField><br/>
                    <Button type="submit" primary>Submit</Button>
                </form>
                </Card>
            </div>
        )
    }
}

export default OrderForm;