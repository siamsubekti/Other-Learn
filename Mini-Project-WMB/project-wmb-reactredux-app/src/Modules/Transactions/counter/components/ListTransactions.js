import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import * as TransaksiService from '../service/TransaksiService';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField,
    Fab
} from "@material-ui/core";
import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    table: {
        width: 1000,
        marginTop:30,  
        marginLeft:40,     
        justifyContent:'center',
        
    },
    card:{
        marginTop:100,
    
        width: 1100
    },
    h2: {
        marginTop:20,
        justifyContent:'center'
    }
}))


function renderTransactionRows(transactions) {
    console.log('renderRows transaction');
    return transactions.map((trans) => {
        console.log(trans)
        const rowSpan = trans.orderDetails.length;
        return (
            <TableRow key={trans.id}>
                <TableCell>{trans.id}</TableCell>
                <TableCell>{trans.customerName}</TableCell>
                <TableCell>{trans.statusTransaction}</TableCell>
                <TableCell>{trans.priceTotal}</TableCell>
                <TableCell>{trans.quantityCustomer}</TableCell>
                <TableCell>{trans.tables.name}</TableCell>
                <TableCell>{trans.tables.statusTable}</TableCell>
                <TableCell>{trans.cashier.name}</TableCell>
                {/* <TableRow> */}
                { trans.orderDetails.map((item)=>{
                        // console.log("itemfood :",itemFood)
                    return (
                        <TableRow>
                            <TableCell>{ item.menu.name }</TableCell>
                            <TableCell>{ item.quantity }</TableCell>
                        </TableRow>
                    )
                })}
                {/* </TableRow> */}
                {/* <TableCell>{trans.orderDetails.id}</TableCell> */}
                {/* <TableCell>{trans.orderDetails.itemFood.name}</TableCell> */}
                {/* <TableCell>{trans.orderDetails.quantityFood}</TableCell> */}
                {/* <TableCell>{trans.orderDetails.itemFood.price}</TableCell>
                <TableCell>{trans.orderDetails.itemDrinks.id}</TableCell>
                <TableCell>{trans.orderDetails.itemDrinks.name}</TableCell> */}
                {/* <TableCell>{trans.orderDetails.quantityDrink}</TableCell> */}
                {/* <TableCell>{trans.orderDetails.itemDrinks.price}</TableCell> */}
                {/* <TableCell>{trans.cashier.name}</TableCell>  */}
            </TableRow>
        )
    })
}

function ListTransactions (props){
    const classes = useStyle();
        console.log('loadtransaction');
        const { dispatch, transactions, loading } = props;
        if (props.loading) {
            TransaksiService.list()
            .then((transactions) => {
                    dispatch({type: 'TRANSACTION_LIST_DONE',loading: false , transactions});
            })
            .catch((err)=> {
                dispatch({type: 'TRANSACTION_LIST_DONE', loading: false, transactions: [] })
            })
        }

        console.log('rendertransaksi');   
        let rows = (<TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>);

        if(!loading) {
            rows = renderTransactionRows(transactions);
        }
        return (
            <Grid>
                <Card className={classes.card} style={{height:'auto'}}>
                <h2 className={classes.h2}>List Transactions</h2>
                <Table className={classes.table} border={1} cellPadding={5} width="100%">
                    <TableHead >
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>customer name</TableCell>
                            <TableCell>status</TableCell>
                            <TableCell>price total</TableCell>
                            <TableCell>quantity customer</TableCell>
                            <TableCell>table</TableCell>
                            <TableCell>status table</TableCell>
                            <TableCell>cashier name</TableCell>
                            <TableCell style={{textAlign:'center'}}>Menu
                            {/* <TableRow>
                                <TableCell>Food</TableCell>
                                <TableCell>Item</TableCell>
                            </TableRow> */}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
                </Card>
            </Grid>
        );
    }

function mapStateToProps(state) {
    return {...state };
}

export default connect (mapStateToProps)(ListTransactions)