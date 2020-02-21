import React, { Component } from 'react';
import '../../../../style/style.css';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import * as MinumanService from '../service/DrinkService';
import Card from '@material-ui/core/Card';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableHead, TableRow, Paper, TextField,
    Fab
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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
        textAlign: "center"
    },
    table: {
        width: '85%',
        marginLeft:50,
        marginTop:20
        
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
    },
    card:{
        marginTop:100,
        height:400,
        width: 1100
    },
    minuman:{
        height:40,
        width: 30
    },
    image:{
        height:20,
        width:25
    },
    text:{
        textAlign:"center"
    },
    card2:{
        margin:"10px",
        display: "inline-block",
        width:"200px",
        height:"200px",
        borderRadius:"10px",
        border:"1px solid black",
        boxShadow:"10px 10px grey",
        flexDirection:"space"

    }
    

}));

function DrinksList(props) {
    const classes = useStyle();
    const { dispatch, drinks, loading } = props;
    if (props.loading) {
        console.log('loadDrink');
        MinumanService.list()
            .then((drinks) => {
                dispatch({ type: 'DRINKS_LIST_DONE', loading: false, drinks });
            })
            .catch((err) => {
                dispatch({ type: 'DRINKS_LIST_DONE', loading: false, drinks: [] });
            });
    }
    function renderDrinkRows(drinks) {
        console.log('renderfood', drinks);
        return drinks.map((drink) => {
            return (
                <Grid>
                <Card className={classes.card2}>
                <CardActionArea>
                    <CardContent>
                    <h3 className={classes.text}>{drink.name}</h3>
                    <h3 className={classes.text}>Stock : {drink.stock}</h3>
                    <h3 className={classes.text}>Rp.{drink.price}</h3>
                    </CardContent>
                </CardActionArea>
                </Card>
                </Grid>
            );
        });
    }


    console.log('RENDER DRINK');
    let rows = (<TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>);
    if (!loading) {
        rows = renderDrinkRows(drinks);
    }
    return (
        <Grid className="from-food">
            <Card className={classes.card}>
            <h2 className={classes.reet}>Add Item</h2>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    required
                    id="standard-secondary"
                    label="Enter the name of the drink"
                    color="secondary" />
                <TextField
                    required
                    id="standard-secondary"
                    label="Enter prices"
                    color="secondary"
                    className={classes.price} />
                <Fab color="primary" aria-label="add" className={classes.fabadd} border={1}>
                    <AddIcon />
                </Fab>
            </form>
            </Card>
            <Paper className={classes.root}>
            <div className="listmenu">
                    <h2>Beverage List</h2>
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
                    {rows}
            </Paper>
        </Grid>
    );
}

function mapStateToProps(state) {
    return { ...state.drinks}
}

export default connect(mapStateToProps)(DrinksList);