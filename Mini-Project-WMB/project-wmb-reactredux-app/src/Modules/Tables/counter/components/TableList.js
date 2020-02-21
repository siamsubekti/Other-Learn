import React, { Component } from 'react';
import '../../../../style/style.css';
import { Grid, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import * as TableService from '../service/TableService';



function renderTableRows(tables) {
    console.log('table', tables);
    console.log('renderfood');
    return tables.map((row) => {
        return (
            <Grid className="rows">
            
            <Typography key={row.id} className="rows1">
                <h4 style={{textAlign:'center', marginBottom:10}}>{row.name}</h4>
                <h4 style={{textAlign:'center'}}>Chairs Amount : {row.chairsAmount}</h4>
                <h2 style={{textAlign:'center'}}>Status : {row.statusTable}</h2>
            </Typography>
            
            </Grid>
        );
    });
}


function ListTable (props) {
        console.log('Table list props', props);

        const { dispatch, loading, tables } = props;
        console.log('loadmeja', loading);
        if (props.loading) {
        TableService.list()
            .then((tables) => {
                dispatch({ type: 'TABLES_LIST_DONE', loading: false, tables });
            })
            .catch((err) => {
                dispatch({ type: 'TABLES_LIST_DONE', loading: false, tables: [] });
            });
        }

                
        console.log('RENDER MEJA');
        let rows = (<tr><td colSpan={4}>Loading...</td></tr>);
        
        if (!loading) {
            rows = renderTableRows(tables);
        }
        return (
            <Grid>
                <h2>List Table</h2>
                {/* <Table className="table" border={1} cellPadding={5} width="100%">
                    <TableHead>
                        <TableRow> */}
                            {/* <TableCell>id</TableCell>
                            <TableCell>nama</TableCell>
                            <TableCell>total kursi</TableCell> */}
                        {/* </TableRow>
                    </TableHead>
                    <TableBody> */}
                        {rows}
                    {/* </TableBody>
                </Table> */}
            </Grid>
        );
    }


function mapStateToProps(state) {
    return {...state.tables};
}

export default connect (mapStateToProps)(ListTable);