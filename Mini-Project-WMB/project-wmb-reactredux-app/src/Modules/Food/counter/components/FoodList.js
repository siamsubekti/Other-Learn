import React from 'react';
import '../../../../style/style.css';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import * as MakananService from '../service/FoodService';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField,
    Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: '30px',
        overFlowX: 'auto',
        marginLeft: '20px',
        textAlign: "center"
    },
    table: {
        width: '100%',
        minHeight: 400,
        minWidth: 600,
    },
    reet: {
        marginTop: '100px',
        marginLeft: '20px',
    },
    fabdelete: {
        marginLeft: '20px',
        color: 'primary'
    },
    price: {
        marginLeft: '20px',
    }

}));



function FoodList(props) {
    const classes = useStyle();
    console.log('List food');
    const { dispatch, foods, loading } = props;
    console.log('props', props);
    if (props.loading) {
        MakananService.list()
            .then((foods) => {
                dispatch({ type: 'FOODS_LIST_DONE', loading: false, foods });
            })
            .catch((err) => {
                dispatch({ type: 'FOODS_LIST_DONE', loading: false, foods: [] });
            });
        console.log('dispatch: ', dispatch);
    }

    function renderFoodRows(foods) {
        console.log('renderfood', foods);
        return foods.map((food) => {
            return (
                <StyledTableRow key={food.id}>
                    <StyledTableCell>{food.id}</StyledTableCell>
                    <StyledTableCell>{food.name}</StyledTableCell>
                    <StyledTableCell>{food.stock}</StyledTableCell>
                    <StyledTableCell>{food.price}</StyledTableCell>
                    <StyledTableCell>
                        <Fab color="secondary" aria-label="edit"
                            className={classes.fabedit}>
                            <EditIcon />
                        </Fab>
                        <Fab aria-label="delete" className={classes.fabdelete}>
                            <DeleteIcon />
                        </Fab></StyledTableCell>
                </StyledTableRow>
            );
        });
    }
    console.log('RENDER FOOD');
    let rows = (<TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>);
    if (!loading) {
        rows = renderFoodRows(foods);
    }
    return (
        <Grid className="from-food">
            <h2 className={classes.reet}>Add Item</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    id="standard-secondary"
                    label="enter the name of the food"
                    color="secondary" />
                <TextField
                    required
                    id="standard-secondary"
                    label="Enter price"
                    color="secondary"
                    className={classes.price} />
                <Fab color="primary" aria-label="add" className={classes.fabadd} border={1}>
                    <AddIcon />
                </Fab>
            </form>

            <Paper className={classes.root}>
                <div className="listmenu">
                    <h2>List Menu</h2>
                    <div className={classes.margin}>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <SearchIcon />
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Search" />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Table className={classes.table} border={1} cellPadding={5} width="100%">
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>id</StyledTableCell>
                            <StyledTableCell>name</StyledTableCell>
                            <StyledTableCell>price</StyledTableCell>
                            <StyledTableCell>action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
}

function mapStateToProps(state) {
    return { ...state.foods}
}

export default connect(mapStateToProps)(FoodList);