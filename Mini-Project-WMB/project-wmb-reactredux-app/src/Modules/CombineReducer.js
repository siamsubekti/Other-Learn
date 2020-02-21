import {combineReducers} from 'redux';
import FoodReducer from './Food/counter/reducer/FoodReducer'
import TableReducer from './Tables/counter/reducer/TableReducer'
import DrinkReducer from './Drinks/counter/reducer/DrinkReducer'

export default combineReducers({
    food: FoodReducer,
    tables: TableReducer,
    drink: DrinkReducer
})